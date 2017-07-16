import { Router, NavigationEnd } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Routing event updates for debugging purposes
  constructor(private router: Router) {
    router.events.subscribe((val) => {
        // see also 
        console.log(val) 
    });
  }
}
