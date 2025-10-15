import { Injectable } from '@angular/core';
import { OrderState } from '../../../shared/models/orderState';
import { OrderContext } from './order-context';

@Injectable({
  providedIn: 'root'
})
export class DerivedState implements OrderState {
  private context!: OrderContext;

  setContext(context: OrderContext): void {
    this.context = context;
  }

  processOrder(): void {
    console.log('Cannot process order. Order has already been delivered.');
  }

  shipOrder(): void {
    console.log('Cannot ship order. Order has already been delivered.');
  }

  deliverOrder(): void {
    console.log('Order delivered successfully!');
  }
  cancelOrder(): void {
    console.log('Cannot cancel order. Order has already been delivered.');
  }
}
