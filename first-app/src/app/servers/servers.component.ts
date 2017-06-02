import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fa-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreation = 'No server was created.';
  serverName = '';
  serverCreated = false;
  servers = ['DevServer', 'StageServer'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreation = 'New server created! The name is ' + this.serverName;
  }

  onDeleteServer() {
    this.serverCreated = false;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement> event.target).value;
  }
}
