import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

import {
  Auth,
  GoogleAuthProvider,
  authState,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  user,
} from '@angular/fire/auth';
import { doc, docData, setDoc } from '@angular/fire/firestore';
import { Firestore } from '@angular/fire/firestore';
import { Observable, of, switchMap, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<User | null>;
  constructor(
    private auth: Auth,
    private afs: Firestore,
    private router: Router
  ) {
    this.user$ = authState(auth).pipe(
      switchMap((user) => {
        return user
          ? (docData(doc(this.afs, 'users', user.uid)) as Observable<User>)
          : of(null);
      })
    );
  }

  async emailSignUp(email: string, password: string) {
    const credential = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );
    await updateProfile(credential.user, {
      displayName: credential.user.displayName,
    });
    await sendEmailVerification(credential.user);
    return this.updateUserData(credential.user);
  }

  async googleSignIn() {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(this.auth, provider)
      .then((user) => {
        this.updateUserData(user);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  private updateUserData(user: any) {
    const userRef = doc(this.afs, 'users', user.uid);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    };
    return setDoc(userRef, data, { merge: true });
  }
}
