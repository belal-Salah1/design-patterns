import { Injectable } from '@angular/core';
import { BaseDiscount } from '../../shared/models/base-discount';

@Injectable({
  providedIn: 'root'
})
export class OnlineDiscount extends BaseDiscount{
  protected override getDiscount(amount: number, isOnline: boolean): number {
    return isOnline && amount > 1000 ? 0.1 : 0;
  }
  
}
