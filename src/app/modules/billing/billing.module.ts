import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
// import { Routes, RouterModule } from '@angular/router';

import { BillingRoutingModule } from "./billing-routing.module"; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';




@NgModule({
  declarations: [
    HomeComponent,
    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    BillingRoutingModule,
    MatPaginatorModule,
    FormsModule,
    
  ],
  exports:[HomeComponent]
})
export class BillingModule { }
