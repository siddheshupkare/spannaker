import { Component, OnInit } from '@angular/core';
import {Exploredata} from '../models/explore.model';
import { HttpClient} from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModaldataComponent } from '../modaldata/modaldata.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  data: Exploredata[]=[]

  constructor(private http: HttpClient, private dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.displayData();

  }

  displayData()
  {
    this.http.get<any>("https://findfalcone.herokuapp.com/vehicles").subscribe((newData)=>
    {
      console.log(newData);
      this.data=newData
      console.log(this.data)
    })
  }

openDialog(a: any)
{
  const dialogConfig=new MatDialogConfig();
  this.dialog.open(ModaldataComponent, {
    data:this.data[a],height: '400px',
    width: '400px',
  });
}

logout()
{
  this.router.navigate(['login'])
}
}
