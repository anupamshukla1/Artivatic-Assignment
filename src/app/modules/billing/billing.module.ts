import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';


import { BillingRoutingModule } from "./billing-routing.module"; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

import { ViewbillComponent } from './viewbill/viewbill.component';




@NgModule({
  declarations: [
    HomeComponent,
    ViewbillComponent
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    BillingRoutingModule,
    FormsModule,
    
  ],
  exports:[HomeComponent]
})
export class BillingModule { }