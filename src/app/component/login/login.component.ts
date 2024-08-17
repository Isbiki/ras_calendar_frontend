import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  signupUsers: any[] = [];
  signupObj: any = {
    username: '',
    email: '',
    password: ''
  };
  loginObj: any={
    username: '',
    password: ''
  };

  constructor(){}
  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if(localData != null){
      this.signupUsers =JSON.parse(localData);
    }
  }
  onSignUp(){
    this.signupUsers.push(this.signupObj)
    localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
    console.log('Sign Up', this.signupObj);
    this.signupObj= {
      username: '',
      email: '',
      password: ''
    };
  }
  onLogin(){
    debugger
    const isUserExist = this.signupUsers.find(m =>m.username == this.loginObj.username && m.password == this.loginObj.password);
    if(isUserExist != undefined){
      alert('user login successfully!!');
    }
    else{
      alert('wrong credentials');
    }
  }
}
