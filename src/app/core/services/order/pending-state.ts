import { inject, Injectable } from '@angular/core';
import { OrderState } from '../../../shared/models/orderState';
import { OrderContext } from './order-context';
import { ShippedState } from './shipped-state';
import { Cancel } from './cancel';

@Injectable({
  providedIn: 'root'
})
export class PendingState implements OrderState {
  private context!: OrderContext;
  private readonly shippedState = inject(ShippedState);
  private readonly cancelState = inject(Cancel);

  setContext(context: OrderContext): void {
    this.context = context;
  }

  processOrder(): void {
    console.log('Order is being processed.');
    this.context.setState(this.shippedState);
  }

  shipOrder(): void {
    console.log('Cannot ship order. Order must be processed first.');
  }

  deliverOrder(): void {
    console.log('Cannot deliver order. Order must be processed and shipped first.');
  }

  cancelOrder(): void {
    console.log('Order cancelled successfully.');
    this.context.setState(this.cancelState);
  }
}
