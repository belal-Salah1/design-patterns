import { NotificationFactory } from './../../../core/services/notification/notification-factory';
import { Component, inject, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Navbar } from "../../../shared/components/navbar/navbar";
import { RouteData } from '../../../shared/models/route.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notification',
  imports: [ButtonModule, Navbar],
  templateUrl: './notification.html',
  styleUrl: './notification.scss'
})
export class Notification {
  message= signal<string>('');
  private readonly route = inject(ActivatedRoute);
  routeData = this.route.snapshot.data as RouteData;
  
getSuccessMsg() {
  this.message.set( this.NotificationFactory.createNotification().success("Success message from Notification component"))
}
getWarningMsg() {
  this.message.set( this.NotificationFactory.createNotification().warn("Warning message from Notification component"))
}
getErrorMsg() {
  this.message.set(this.NotificationFactory.createNotification().error("Error message from Notification component"))
}
  private readonly NotificationFactory = inject( NotificationFactory);
toggleNotifications() {
this.NotificationFactory.toggleNotifications()
}

}
