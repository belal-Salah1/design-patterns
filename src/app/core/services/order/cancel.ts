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
    console.log('Cannot process order. Order is already shipped.');
  }
  shipOrder(): void {
    console.log('Cannot ship order. Order is already shipped.');
  }
  deliverOrder(): void {
    console.log('Cannot deliver order. Order is already delivered.');
  }
  cancelOrder(): void {
    console.log('Order cancelled successfully.');
  }
  
}
