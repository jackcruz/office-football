import { Router } from '@angular/router';
import {Component} from '@angular/core';
import {VERSION} from '@angular/material';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent { 
  constructor(private router: Router) { }
  
  createGame() {
    this.router.navigate(['/game']);
  }
}
