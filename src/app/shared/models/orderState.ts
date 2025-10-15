import { OrderContext } from "../../core/services/order/order-context";

export interface OrderState {
setContext(context:OrderContext):void;       
 processOrder(): void;
  shipOrder(): void;
  deliverOrder(): void;
  cancelOrder(): void;
}
