import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
// import { LoginnComponent } from './auth/loginn/loginn.component';
import { SignupComponent } from './auth/signup/signup.component';
import { NewQuizComponent } from './new-quiz/new-quiz.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  // { path: '', component: LoginComponent},
 // { path: 'loginn', component: LoginnComponent },
  { path: 'login', component: LoginComponent },
 // { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'newquiz', component: NewQuizComponent  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
