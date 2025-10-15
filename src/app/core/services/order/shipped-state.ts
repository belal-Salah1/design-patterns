import { inject, Injectable } from '@angular/core';
import { OrderState } from '../../../shared/models/orderState';
import { OrderContext } from './order-context';
import { DerivedState } from './derived-state';

@Injectable({
  providedIn: 'root'
})
export class ShippedState implements OrderState {
  private context!: OrderContext;
  private readonly derivedState = inject(DerivedState);

  setContext(context: OrderContext): void {
    this.context = context;
  }

  processOrder(): void {
    console.log('Cannot process order. Order is already shipped.');
  }

  shipOrder(): void {
    console.log('Order is already shipped.');
  }

  deliverOrder(): void {
    console.log('Order is being delivered.');
    this.context.setState(this.derivedState);
  }

  cancelOrder(): void {
    console.log('Cannot cancel order. Order has already been shipped.');
  }
}
