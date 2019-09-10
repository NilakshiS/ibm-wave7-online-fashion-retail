import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrder } from './order';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public data: string;
  private _url : string="http://172.23.239.125:8187/designs";
  constructor(private http: HttpClient) { }
  getOrders() : Observable<IOrder[]>
 {
     return this.http.get<IOrder[]>(this._url);
 }

 submit(mapping)
 {
  return this.http.post("http://localhost:8194/activiti/add-material",mapping);
  //  return this.http.post("http://172.23.238.169:8080/activiti/add-material",mapping);
 }

}
