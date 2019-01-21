import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any;
  hide = true;
  password: any;

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  login()
  {
    console.log("kon hai",this.email,this.password)
    if(this.email==='ranjit@gmail.com' && this.password==='ranjit@')
    {
      console.log(this.email,this.password)
      this._router.navigate(['/admin']); 
    }
    else{
    alert("Email ID or Password is not valid");
    this._router.navigate(['/auth/login']); 
    }
  }
}
