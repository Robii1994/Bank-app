import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  accountDetails:any = {
    1000: { acno: 1000, username: "userone", balance: 5000, password: "user1" },
    1001: { acno: 1001, username: "usertwo", balance: 3000, password: "user2" },
    1002: { acno: 1002, username: "userthree", balance: 4000, password: "user3" },
}

currentUser:any;

  constructor() { }

  register(acno:any,username:any,password:any){
	if(acno in this.accountDetails){
		alert("User Exit, Please Login");
		return false;
	}
	else{
		this.accountDetails[acno]={
			acno,
			username,
			balance:0,
			password,
		}
		alert("Registration Successfull");
		console.log(this.accountDetails);
		return true;
	}
  }
  

  login(acno:any,password:any){
    let dataset = this.accountDetails;
	if(acno in dataset){
		var pwd1 = dataset[acno].password;
		if(pwd1==password){
			this.currentUser = dataset[acno].username;
			alert("Login Successful");
			return true;
		}
		else{
			alert("incorrect Password");
			return false;
		}
	}
	else{
		alert("No User Exist");
		return false;
	}
}
  
}
