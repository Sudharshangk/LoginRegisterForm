import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { RouterModule } from '@angular/router';



import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // For template-driven forms
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';
import { AddcontactComponent } from './components/addcontact/addcontact.component';
// // OR
// import { ReactiveFormsModule } from '@angular/forms'; // For reactive forms

// import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    
  ],
  imports: [
    FormsModule // Import FormsModule for template-driven forms
    // OR
    // ReactiveFormsModule // Import ReactiveFormsModule for reactive forms
  ],
  exports: [RouterModule]
  })
export class AppRoutingModule { }

















export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '', redirectTo: 'welcomepage', pathMatch: 'full'
    },
    { 
        path: 'register', 
        component: RegisterComponent
    },
    {
        path: 'login.html',
        component: LoginComponent
    },
    {
        path: 'forgotpassword',
        component: ForgotpasswordComponent
    },
    {
        path: 'welcomepage',
        component: WelcomepageComponent
    },
    {
        path: 'addcontact',
        component: AddcontactComponent
    }

];


// import { NgModule } from '@angular/core';
// import { RouterModule } from '@angular/router';
// import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
// import { ReactiveFormsModule } from '@angular/forms';
//  // Import the RegisterComponent

// @NgModule({
//     declarations: [
        
// ],
//   imports: [
//     RouterModule.forRoot(routes),
//     ReactiveFormsModule,
// ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
