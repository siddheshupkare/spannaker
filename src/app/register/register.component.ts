import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {regForm} from '../models/userform.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
mydata=new regForm("","","","");
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log(this.mydata)
    localStorage.setItem(this.mydata.username,JSON.stringify(this.mydata))
    window.alert("User Registered")
    this.router.navigate(['login'])

  }

}


