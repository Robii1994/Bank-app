import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  accountDetails:any = {
    1000: { acno: 1000, name: "userone", balance: 5000, password: "user1" },
    1001: { acno: 1001, name: "usertwo", balance: 3000, password: "user2" },
    1002: { acno: 1002, name: "userthree", balance: 4000, password: "user3" },
}
name = "Robin"
accno = "";
pwd = "";
usrname = "";


// getaccno(event:any){
// 	this.accno = event.target.value;
// }
// getpwd(event:any){
// 	this.pwd = event.target.value
// }


  constructor(private routes:Router) { }

  ngOnInit(): void {
  }

  login(){
	  var uname = this.usrname;
	  var account_number = this.accno;
	  var pass_word = this.pwd;
	//   var account_number = a.value;
	//   var pass_word = b.value;
	  var datas = this.accountDetails;

		if (account_number in datas){
			var pwdstore = datas[account_number].password;
			this.usrname = datas[account_number].name; // username
			if(pwdstore == pass_word){
				alert("Login Successfull");
				this.routes.navigateByUrl("dashboard")
			}
			else{
				alert("invalid Password");
			}
		}
		else{
			alert("Please enter a valid Account Number");
		}
  }

}


