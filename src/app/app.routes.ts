import { Routes } from '@angular/router';
import { MainPageComponent } from './components/pages/main-page/main-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/usuarios/login/login.component';
import { InsertWeightComponent } from './components/pages/insert-weight/insert-weight.component';

export const routes: Routes = [
  //Principal
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'home',component:HomeComponent,pathMatch:'full'},
  // USUARIOS
  {path:'login',component:LoginComponent,pathMatch:'full'},
  {path:'insertWeigth',component:InsertWeightComponent,pathMatch:'full'}
];
