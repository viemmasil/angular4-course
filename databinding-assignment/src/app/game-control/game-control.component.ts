import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output('startGame') started = new EventEmitter<number>();
  @Output('stopGame') stopped = new EventEmitter<number>();

  oddOrEven: number = 0;
  ref;

  constructor() { } 

  ngOnInit() {
  }

  onStarting() {
    this.ref = setInterval(() => { 
      this.oddOrEven += 1;
      this.started.emit(this.oddOrEven)
    }, 1000);
  }

  onStopping() {
    clearInterval(this.ref);
    this.stopped.emit(-1);
  }
}
