import { Component } from '@angular/core';
import { WebSocketService } from '../websocket.service';
import { Observable, Subscription, map } from 'rxjs';
import { RxStompService, StompService } from '@stomp/ng2-stompjs';
import { Message } from '@stomp/stompjs';

@Component({
  selector: 'app-websocket',
  templateUrl: './websocket.component.html',
  styleUrls: ['./websocket.component.css']
})
export class WebsocketComponent {

  public notifications = 0;

    constructor(private webSocketService: WebSocketService) {

        let stompClient = this.webSocketService.connect();

        stompClient.connect({}, (frame: any) => {

            stompClient.subscribe('/topic/notification', notifications => {

                this.notifications = JSON.parse(notifications.body).count;

            })

        });
    }
}