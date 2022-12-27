import { productType } from './../interface';
import { Component } from '@angular/core';
import {DataService} from '../data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private data: DataService){
  }
  productData:productType[]=[];
  
  ngOnInit() {
    this.data.getProductData().subscribe((data) => this.productData = data)
    console.log(this.productData);
  }
}
