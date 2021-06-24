import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  Product: any = [];

  constructor(private apiService: ApiService) {
    this.readEmployee();
  }

  ngOnInit(){

  }
  readEmployee() {
    this.apiService.getProducts().subscribe((data) => {
      this.Product = data;
    });
  }

  buyProduct(product, i) {
    const orderObj = {
      customerId: '5eb86855f3bd49a4172b2a1c',
      productId: product._id,
    };
    this.apiService.createOrder(orderObj).subscribe((res) => {
      console.log('Employee successfully created!');
      alert('Order successfully placed');
    }, (error) => {
      console.log(error);
    });
  }

}
