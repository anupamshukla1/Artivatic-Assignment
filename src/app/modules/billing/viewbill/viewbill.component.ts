import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';

import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { BillingService } from 'src/app/services/billing.service';




@Component({
  selector: 'app-viewbill',
  templateUrl: './viewbill.component.html',
  styleUrls: ['./viewbill.component.css']
})
export class ViewbillComponent implements OnInit,AfterViewInit {
  displayedColumns: string[] = ['position', 'customerName', 'date', 'grandTotal'];
  
  dataSource
  user
  
  @ViewChild(MatSort,{static:false}) sort: MatSort;
  
  constructor(private billingService:BillingService){}
  ngOnInit(){
    this.getAllBill()
  }
  ngAfterViewInit() {
    
  }
  getAllBill(){
    this.billingService.getAllBill().subscribe((info:any)=>{
      this.user=info
      

      this.dataSource = new MatTableDataSource(info);
      
      this.dataSource.sort = this.sort
      
      console.log(this.dataSource);
    })
    
  }
}
