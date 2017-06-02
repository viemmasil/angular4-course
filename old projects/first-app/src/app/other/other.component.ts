import { Component } from '@angular/core';

@Component({
  selector: 'fa-other',
  templateUrl: './other.component.html',
  styles: ['.redBorder { border: 1px solid red}']
})
export class OtherComponent {
  stringInterpolation = "This is a stringInterpolation!";
  numberInterpolation = 5;

  onClicked(value: string) {
    alert(value);
  }
}