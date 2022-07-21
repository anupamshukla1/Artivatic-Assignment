import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})

export class BillingService {
  
  constructor(private httpClient: HttpClient) { }
  
  getAllBill() {
    return this.httpClient.get(`${environment.baseUrl}/bill`)
  }
  
  
  
  getbill(keyid:string){
    return this.httpClient.get(`${environment.baseUrl}/bill/?date=`+keyid)
  }
}
