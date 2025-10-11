import { Component, inject, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { OnlineDiscount } from '../../../core/services/online-discount';
import { Navbar } from "../../../shared/components/navbar/navbar";
import { ActivatedRoute, Route } from '@angular/router';
import { RouteData } from '../../../shared/models/route.model';

@Component({
  selector: 'app-total-price',
  imports: [ButtonModule, InputTextModule, FormsModule, Navbar],
  templateUrl: './total-price.html',
  styleUrl: './total-price.scss'
})
export class TotalPrice {
  value = signal<number>(0)
  discountService = inject(OnlineDiscount)
  isOnline=signal<boolean>(false)
  private readonly route = inject(ActivatedRoute);
  routeData = this.route.snapshot.data as RouteData
  getFinalPrice(){
    let finalPrice  =  computed(()=> this.discountService.calulateDiscount(this.value(),this.isOnline()))
    return finalPrice()
  }
  setOnline(){
     this.isOnline.set(true)
  }
  setInStore(){
     this.isOnline.set(false)
  }
}
