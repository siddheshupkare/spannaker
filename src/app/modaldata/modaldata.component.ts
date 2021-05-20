import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Exploredata} from '../models/explore.model'
@Component({
  selector: 'app-modaldata',
  templateUrl: './modaldata.component.html',
  styleUrls: ['./modaldata.component.css']
})
export class ModaldataComponent implements OnInit {
newdata: Exploredata[]=[]
  constructor(@Inject(MAT_DIALOG_DATA) public data: Exploredata) { }

  ngOnInit(): void {

    console.log(this.data)


  }

}
