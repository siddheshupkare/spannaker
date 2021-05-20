import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {regForm} from '../models/userform.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit
{
  loginData=new regForm("","","","")

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  //getting login data
    onSubmit()
    {
      var userData=JSON.parse(localStorage.getItem(this.loginData.username) || '{}');
      //console.log(userData.username)

      if(userData.username == this.loginData.username && userData.password == this.loginData.password )
      {

          this.router.navigate(['explore'],{queryParams:{data:userData, si:true}});
      }
      else
      {
        window.alert("Invalid username or password")
      }



    }

}
