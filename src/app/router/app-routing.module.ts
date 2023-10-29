import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LampadaComponent } from '../lampada/lampada.component';
import { WebsocketComponent } from '../websocket/websocket.component';

const routes: Routes = [
  { path: '', redirectTo: '/websocket', pathMatch: 'full' },
  { path: 'lampada', component: LampadaComponent },
  { path: 'websocket', component: WebsocketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }