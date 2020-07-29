import { Component, OnInit } from '@angular/core';
import { NotificationService,Command } from '../notification.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.css']
})
export class NotificationListComponent implements OnInit {
messages:Observable<Command[]>
  constructor(private notificationService:NotificationService) {
    this.messages=this.notificationService.messagesOutput;
   }

  ngOnInit(): void {
  }

  clearMessage(id:number){
    this.notificationService.clearMessage(id);
  }

}
