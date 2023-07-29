import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {
    path: '',
    children: [
      {path : 'profile/:username' , component:ProfileComponent},
      {path : 'register' , component:RegisterComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
