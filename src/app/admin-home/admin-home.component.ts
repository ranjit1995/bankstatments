import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AuthService } from '../auth.component';
import { Headers } from '@angular/http';
import {HttpClient} from '@angular/common/http';
export interface PeriodicElement {
  selectId:number;
  transectionId:string;
  transactionDate:string;
  Amount: number;
  type: string;
  tag: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {selectId: 1, transectionId: 'xxxxxx12130',transactionDate:'12/12/2016', Amount: 100.0079, type: 'Cr',tag:''},
  {selectId: 2, transectionId: 'xxxxxx12131',transactionDate:'12/12/2016', Amount: 112.09079, type: 'Cr',tag:''},
  {selectId: 3, transectionId: 'xxxxxx12132',transactionDate:'12/12/2016', Amount: 122.0079, type: 'Cr',tag:''},
  {selectId: 4, transectionId: 'xxxxxx12133',transactionDate:'12/12/2016', Amount: 221.0079, type: 'Cr',tag:''},
  {selectId: 5, transectionId: 'xxxxxx12134',transactionDate:'12/12/2016', Amount: 145.0079, type: 'Cr',tag:''},
  {selectId: 6, transectionId: 'xxxxxx12135',transactionDate:'12/12/2016', Amount: 145.0079, type: 'Cr',tag:''},
  {selectId: 7, transectionId: 'xxxxxx12136',transactionDate:'12/12/2016', Amount: 167.0079, type: 'Cr',tag:''},
  {selectId: 8, transectionId: 'xxxxxx12137',transactionDate:'12/12/2016', Amount: 341.0079, type: 'Cr',tag:''},
  {selectId: 9, transectionId: 'xxxxxx12138',transactionDate:'12/12/2016', Amount: 145.0079, type: 'Cr',tag:''},
  {selectId: 10, transectionId: 'xxxxxx12139',transactionDate:'12/12/2016', Amount: 315.0079, type: 'Cr',tag:''},
  {selectId: 11, transectionId: 'xxxxxx12140',transactionDate:'12/12/2016', Amount: 145.0079, type: 'Cr',tag:''},
  {selectId: 12, transectionId: 'xxxxxx12141',transactionDate:'12/12/2016', Amount: 451.0079, type: 'Cr',tag:''},
  
  ];
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  allData : any = [];
  filterBol : boolean;
  displayedColumns: string[] = ['selectId', 'transectionId', 'transactionDate', 'Amount','type','tag'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
dataSources=ELEMENT_DATA
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  filterBvalue: any;
  fileData: FileList;
  file: File;
  formData: FormData;
  //spin: boolean = false;;
  constructor(private _router: Router,private Auth:AuthService, private http:HttpClient, private spinnerService: Ng4LoadingSpinnerService) { }
  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.getAllStatement();
  }

  getAllStatement()
  {
    this.filterBol = true;
    this.Auth.viewAllStatement().subscribe(res => {
      //console.log("Statements are ",res);
      this.allData = res;
      console.log(this.allData);
      error=>{
        console.log("error is",error)
        alert("invalid user or password");
       }
      }
      );
  }

addTagDialog()
{
  console.log("hello tag is successfully added");
}
removeTagDialog()
{
  console.log("hello tag is removed");
}
fileUpload(event)
{
  //this.spin = true;
  console.log("It's loading");
  this.fileData = event.target.files;
  if(this.fileData.length > 0)
  {
    console.log("hello");
    console.log(this.fileData);
    this.file = this.fileData[0];
    this.formData = new FormData();
    this.formData.append('uploadFile', this.file, this.file.name);
    let headers : Headers = new Headers();
    headers.append('Content-Type','multipart/form-data');
    headers.append('Accept','application/json');
    this.Auth.importData(this.formData).subscribe(res =>{
      if(res==null)
      {
        console.log("Data alreday updated");
        this.spinnerService.hide();
        this._router.navigate(['/admin']);
        //alert("Data Alreday Updated");
      }
      else
        location.reload();
    })
  }
}

chartData()
{

}
filter(e)
{
  console.log(e)
  this.filterBvalue=e.checked;
  if(this.filterBvalue===true)
  {
    this.filterBol = false;
    console.log("true");
    this.Auth.filterTransaction().subscribe(res => {
      this.allData = res;
    });
  }
  else
  {
    console.log("false");
    this.getAllStatement();
  }
}
}
