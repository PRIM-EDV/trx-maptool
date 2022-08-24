import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SituationMapComponent } from './situation-map/situation-map.component';

const routes: Routes = 
  [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'situation', component: SituationMapComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }