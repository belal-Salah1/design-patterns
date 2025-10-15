import { inject, Injectable } from '@angular/core';
import { OrderState } from '../../../shared/models/orderState';
import { PendingState } from './pending-state';

@Injectable({
  providedIn: 'root'
})
export class OrderContext {
  state!: OrderState;
  private readonly pendingState = inject(PendingState);

  constructor() {
    this.setState(this.pendingState);
  }

  setState(state: OrderState) {
    this.state = state; 
    this.state.setContext(this);
  }
  processOrder(){
    this.state.processOrder();
  };
  shipOrder(){
    this.state.shipOrder();
  };
  deliverOrder(){
    this.state.deliverOrder();
  };
  cancelOrder(){
    this.state.cancelOrder();
  }
}
