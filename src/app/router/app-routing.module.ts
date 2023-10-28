import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LampadaComponent } from '../lampada/lampada.component';

const routes: Routes = [
  { path: '', redirectTo: '/lampada', pathMatch: 'full' },
  { path: 'lampada', component: LampadaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }