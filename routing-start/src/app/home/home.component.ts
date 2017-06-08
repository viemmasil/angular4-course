import { Component, OnInit } from '@angular/core';
<<<<<<< 7b146b533292a808a3f69db982004bf05575d3c1
import { Router } from '@angular/router';
=======
>>>>>>> Adding the routing-start project

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

<<<<<<< 7b146b533292a808a3f69db982004bf05575d3c1
  constructor(private router: Router) { }
=======
  constructor() { }
>>>>>>> Adding the routing-start project

  ngOnInit() {
  }

<<<<<<< 7b146b533292a808a3f69db982004bf05575d3c1
  onLoadServers() {
    this.router.navigate(['/servers']);
  }
=======
>>>>>>> Adding the routing-start project
}
