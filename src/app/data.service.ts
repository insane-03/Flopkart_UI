import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { productType } from './interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  // baseUrl = "https://uiexercise.onemindindia.com/api/Product";
  //baseUrl = "https://localhost:7209/api/Mongo_Inventory/GetAllProducts";
  baseUrl = "https://63aa4a187d7edb3ae6247deb.mockapi.io/api/products";
 
  
  getProductData(): Observable<productType[]>{
    return this.http.get<productType[]>(this.baseUrl)
  }
}
