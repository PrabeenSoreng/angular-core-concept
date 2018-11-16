import { Component, OnInit } from '@angular/core';
import { IOrder, ICustomer } from 'src/app/shared/interfaces';
import { DataService } from 'src/app/core/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: IOrder[] = [];
  customer: ICustomer;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = Number(this.route.snapshot.paramMap.get('id'));

    this.dataService.getOrders(id)
      .subscribe(
        (orders: IOrder[]) => {
          this.orders = orders
        }
      );

    this.dataService.getCustomer(id)
        .subscribe(
          (customer: ICustomer) => {
            this.customer = customer;
          }
        );
  }

}
