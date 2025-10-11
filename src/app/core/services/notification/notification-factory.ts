import { Injectable, signal, inject } from '@angular/core';
import { NullNotification } from './null-notification';
import { RealNotification } from './real-notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationFactory {
  enableNotifiations = signal<boolean>(false);
  private readonly realNotification = inject(RealNotification);
  private readonly nullNotification = inject(NullNotification);

  toggleNotifications(){
    this.enableNotifiations.set(!this.enableNotifiations());
  }
  createNotification(){
    switch(this.enableNotifiations()){
      case true:
        return this.realNotification;
      case false:
        return this.nullNotification;

    }
  }

  }

