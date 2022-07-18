import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ViewbillComponent } from './viewbill/viewbill.component';
// import { BillingpdfComponent } from './billingpdf/billingpdf.component';
// import { HomeComponent } from './modules/billing/home/home.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home', pathMatch: 'full'
    },
    {path: 'home', component: HomeComponent},
    {path:'viewbill',component:ViewbillComponent,canActivate:[AuthGuard]},
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BillingRoutingModule { }