import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  Orders: any = [];

  constructor(private apiService: ApiService) {
    this.readOrders();
  }

  ngOnInit() {
  }

  updateOrder(status, order, i) {
      if (window.confirm('Are you sure?')) {
        const id = order._id;
        order.status = status;
        this.apiService.updateOrder(id, order)
          .subscribe(res => {
            alert('Content updated successfully!');
            this.readOrders();
          }, (error) => {
            console.log(error);
          })
    }
  }


  readOrders() {
    this.apiService.getOrders().subscribe((data) => {
      this.Orders = data;
    });
  }

}
