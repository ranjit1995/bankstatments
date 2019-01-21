import { Component, OnInit, ViewChild } from '@angular/core';
import {MatSort, MatTableDataSource, MatPaginator} from '@angular/material';
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

  displayedColumns: string[] = ['selectId', 'transectionId', 'transactionDate', 'Amount','type','tag'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
dataSources=ELEMENT_DATA
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
addTagDialog()
{
  console.log("hello tag is successfully added");
}
removeTagDialog()
{
  console.log("hello tag is removed");
}
click()
{
  console.log("hello");
}
}
