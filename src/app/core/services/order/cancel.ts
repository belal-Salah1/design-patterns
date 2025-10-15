import { Injectable } from '@angular/core';
import { OrderState } from '../../../shared/models/orderState';
import { OrderContext } from './order-context';

@Injectable({
  providedIn: 'root'
})
export class Cancel implements OrderState {
  private context!: OrderContext;
  setContext(context: OrderContext): void {
    this.context = context;
  }
  processOrder(): void {
    console.log('Cannot process order. Order has been cancelled.');
  }
  shipOrder(): void {
    console.log('Cannot ship order. Order has been cancelled.');
  }
  deliverOrder(): void {
    console.log('Cannot deliver order. Order has been cancelled.');
  }
  cancelOrder(): void {
    console.log('Order is already cancelled.');
  }
  
}
