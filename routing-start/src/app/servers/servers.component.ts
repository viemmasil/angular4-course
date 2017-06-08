import { Component, OnInit } from '@angular/core';
<<<<<<< 7b146b533292a808a3f69db982004bf05575d3c1
import { Router } from "@angular/router";

=======
>>>>>>> Adding the routing-start project
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

<<<<<<< 7b146b533292a808a3f69db982004bf05575d3c1
  constructor(private serversService: ServersService,
              private router: Router) { }
=======
  constructor(private serversService: ServersService) { }
>>>>>>> Adding the routing-start project

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

<<<<<<< 7b146b533292a808a3f69db982004bf05575d3c1
  onReload() {
    // this.router.navigate(['/servers']);
  }
=======
>>>>>>> Adding the routing-start project
}
