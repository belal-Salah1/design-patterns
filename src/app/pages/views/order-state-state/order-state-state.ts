import { Component, inject } from '@angular/core';
import { Navbar } from "../../../shared/components/navbar/navbar";
import { RouteData } from '../../../shared/models/route.model';
import { ActivatedRoute } from '@angular/router';
import { OrderContext } from '../../../core/services/order/order-context';
import { Button, ButtonModule } from "primeng/button";

@Component({
  selector: 'app-order-state-state',
  imports: [Navbar, Button, ButtonModule],
  templateUrl: './order-state-state.html',
  styleUrl: './order-state-state.scss'
})
export class OrderStateState {
  orderContext = inject(OrderContext);
cancel() {
  this.orderContext.cancelOrder();
}
deliver() {
  this.orderContext.deliverOrder();
}


ship() {
  this.orderContext.shipOrder();
}
process() {
  this.orderContext.processOrder();
}
  route = inject(ActivatedRoute);
  routeData = this.route.snapshot.data as RouteData;
}
