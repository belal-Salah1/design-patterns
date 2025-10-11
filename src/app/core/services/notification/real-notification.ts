import { Injectable } from '@angular/core';
import { Notifications } from '../../../shared/models/notification';

@Injectable({
  providedIn: 'root'
})
export class RealNotification implements Notifications {
  success(message: string): string {
    return `Success: ${message}`;
  }
  warn(message: string): string {
    return `Warning: ${message}`;
  }
  error(message: string): string {
    return `Error: ${message}`;
  }

  
}
