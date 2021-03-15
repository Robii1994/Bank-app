import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  accountDetails = {
    1000: { acno: 1000, name: "userone", balance: 5000, password: "user1" },
    1001: { acno: 1001, name: "usertwo", balance: 3000, password: "user2" },
    1002: { acno: 1002, name: "userthree", balance: 4000, password: "user3" },
    1003: { acno: 1003, name: "userfour", balance: 9000, password: "user4" },
    1004: { acno: 1004, name: "userfive", balance: 9000, password: "user5" }
}

  constructor() { }

  ngOnInit(): void {
  }
  login(){
    alert("Login Works")
  }
}


