import { Component, OnInit, Output, EventEmitter, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
  encapsulation: ViewEncapsulation.None /*When set to none, expands the css to all application*/
})
export class CockpitComponent implements OnInit {
  @Output('srvCreated') serverCreated = new EventEmitter<{name: string, content: string}>();
  @Output('blpCreated') blueprintCreated = new EventEmitter<{name: string, content: string}>();

  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') srvContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit(
      {name: nameInput.value, 
       content: this.srvContentInput.nativeElement.value}
    );
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit(
      {name: nameInput.value, 
       content: this.srvContentInput.nativeElement.value}
    );
  }
}
