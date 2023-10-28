import { Component } from '@angular/core';

@Component({
  selector: 'app-lampada',
  templateUrl: './lampada.component.html',
  styleUrls: ['./lampada.component.css']
})
export class LampadaComponent {
  
  ligaLampada: Boolean;
  quebraLampada: Boolean;

  constructor() {
    this.ligaLampada = false;
    this.quebraLampada = false;
  }

  reset() {
    this.ligaLampada = false;
    this.quebraLampada = false;
  }

}
