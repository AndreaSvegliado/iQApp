import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[]
})
/* Versione senza menu in alto (solo login)
export class AppComponent {
  title = 'iQApp';
}
*/


export class AppComponent implements OnInit {
  title = 'iQApp';
  userDetails;

  constructor( private router: Router, private uService: UserService  ) { }

  ngOnInit() {
    this.uService.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log(err);
      },
    );
    
  }

  onLogout() {

    //this.router.routeReuseStrategy.shouldReuseRoute = function(){return false;};

    this.userDetails = null;

    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }
}

