import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private headerService: HeaderService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  isUserLoggedIn() {
    if(this.headerService.isUserValidLogin()) {
      return true;
    }
    else {
      return false;
    }
  }

}
