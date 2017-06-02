import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string = '';

  isUserEmpty() {
    return this.username !== '' ? false : true;
  }

  onResetUser() {
    this.username = '';
  }
}
