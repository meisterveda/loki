import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(public auth: AuthService) {}
}
