import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LampadaComponent } from './lampada/lampada.component';
import { AppRoutingModule } from './router/app-routing.module';
import { WebsocketComponent } from './websocket/websocket.component';
import { InjectableRxStompConfig, RxStompService, StompConfig, StompService, rxStompServiceFactory } from '@stomp/ng2-stompjs';
import { webconfig } from './webconfig';

@NgModule({
  declarations: [
    AppComponent,
    LampadaComponent,
    WebsocketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
