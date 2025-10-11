import { Injectable } from '@angular/core';
import { Notifications } from '../../../shared/models/notification';

@Injectable({
  providedIn: 'root'
})
export class NullNotification implements Notifications {
  success(message: string): string {
    console.log('Notifications are disabled.');

    return 'Success Method not implemented.';
  }
  warn(message: string): string {
    console.log('Notifications are disabled.');

    return 'Warn Method not implemented.';
  }
  error(message: string): string {
    console.log('Notifications are disabled.');

    return 'Error Method not implemented.';
  }



}
