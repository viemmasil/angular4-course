import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() optionSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelection(feature: string) {
    this.optionSelected.emit(feature);
  }
}
