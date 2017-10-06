import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private _user: User = new User();
  constructor(private router: Router) { }

  get user() {
    return this._user;
  }

  ngOnInit() {
  }

  login() {
    // TODO: check if the user exists and validate the password
    localStorage.setItem('currentUser', this._user.userName);
    this.router.navigate(['']);
  }
}
