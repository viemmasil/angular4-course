import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  odds: number[] = [];
  evens: number[] = [];
  gameEnded: boolean = false;

  onStart(incr_num: number) {
    if (incr_num % 2 === 0) {
      this.evens.push(incr_num);
    }
    else {
      this.odds.push(incr_num);
    }
  }

  onStop(incr_num: number) {
    this.gameEnded = true;
  }
}
