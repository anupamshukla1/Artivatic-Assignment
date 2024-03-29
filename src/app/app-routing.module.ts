import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagenotfoundComponent } from './modules/layout/pagenotfound/pagenotfound.component';


const routes: Routes = [
  {path:'',redirectTo:'/account/login',pathMatch:'full'},
  {path:'account',loadChildren:()=>import ('./modules/account/account.module').then(m=>m.AccountModule)},
  
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
