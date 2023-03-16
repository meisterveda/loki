import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateComponent } from './pages/create/create.component';
import { ListingsComponent } from './pages/listings/listings.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CreationsComponent } from './pages/dashboard/creations/creations.component';
import { UserComponent } from './pages/user/user.component';
import { AuthGuard } from './guard/auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  { path: 'create', component: CreateComponent },
  { path: 'listing', component: ListingsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user/:id', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'dashboard/creation', component: CreationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
