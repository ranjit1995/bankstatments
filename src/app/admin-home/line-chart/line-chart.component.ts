import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.component';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  chartData : any = [];
  purposeAmount : any = [];
  pName: any = [];
  // credit : any = [];
  // debit : any =[];
  // sale : any = [];
  // delivery : any = [];
  // hr : any = [];
  // Form : any = [];
  // chData : any = [];

  
  // public lineChartData:Array<any> = [
  //    {data: [1.65, 59, 80, 81, 56, 55, 40 , 34, 74,54,44,56], label: 'credit'},
  //    {data: [28, 48, 40, 19, 86, 27, 90,76,3,45,6,34], label: 'debit'},
  //    {data: [18, 48, 77, 9, 100, 27, 40,89,45,76,4,45], label: 'sale'},
  //    {data: [10, 28, 47, 9, 100, 57, 60,39,54,86,2,15], label: 'delivery'},
  //    {data: [38, 48, 77, 29, 10, 17, 40,69,25,76,4,25], label: 'hr'},
  //    {data: [18, 58, 27, 59, 40, 77, 60,89,24,26,1,5], label: 'Form'}
  // ];

  constructor(private Auth:AuthService) {}

  // public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','Navember','December'];
  // public lineChartOptions:any = {
  //   responsive: true
  // };

  ngOnInit()
  {
    this.getChartData();
  }

  getChartData()
  {
    this.Auth.ChartDetails().subscribe(data => {
        console.log("Chart Details");
        //console.log(res);
        this.chartData = data; 
        console.log(this.chartData);
        for(let amount of this.chartData.tagdata)
        {
          this.purposeAmount.push(amount.name);
        }
        // console.log(this.chartData.data.name);
        //   for(let chData of this.chartData.data)
        //   {
        //     for(let usage of this.chartData.tagdata)
        //       switch(this.chartData.tagdata.id)
        //       {
        //         case 0 :  this.credit.push(chData);
        //                   this.credit.push(usage);
        //                   break;
        //         case 1 :  this.debit.push(chData);
        //                   this.debit.push(usage);
        //                   break;
        //         case 2 :  this.sale.push(chData);
        //                   this.sale.push(usage);
        //                   break;
        //         case 3 :  this.delivery.push(chData);
        //                   this.delivery.push(usage);
        //                   break;
        //         case 4 :  this.hr.push(chData);
        //                   this.hr.push(usage);
        //                   break;
        //         case 5 :  this.Form.push(chData);
        //                   this.Form.push(usage);
        //                   break;
        //         default : "Error";
        //       }
        //   }
        //  console.log("Credit")
        // console.log(this.credit);
    });
  }


  // public lineChartColors:Array<any> = [
  //   { // grey
  //     backgroundColor: 'rgba(148,159,177,.8)',
  //     borderColor: 'rgba(148,159,177,1)',
  //     pointBackgroundColor: 'rgba(148,159,177,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(148,159,177,.8)'
  //   },
  //   { // dark grey
  //     backgroundColor: 'rgba(77,83,96,0.2)',
  //     borderColor: 'rgba(77,83,96,1)',
  //     pointBackgroundColor: 'rgba(77,83,96,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(77,83,96,1)'
  //   },
  //   { // grey
  //     backgroundColor: 'rgba(148,159,177,.8)',
  //     borderColor: 'rgba(148,159,177,1)',
  //     pointBackgroundColor: 'rgba(148,159,177,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(148,159,177,.8)'
  //   },
  //   { // dark grey
  //     backgroundColor: 'rgba(77,83,96,0.2)',
  //     borderColor: 'rgba(77,83,96,1)',
  //     pointBackgroundColor: 'rgba(77,83,96,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(77,83,96,1)'
  //   },
  //   { // grey
  //     backgroundColor: 'rgba(148,159,177,.8)',
  //     borderColor: 'rgba(148,159,177,1)',
  //     pointBackgroundColor: 'rgba(148,159,177,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(148,159,177,.8)'
  //   },
  //   { // dark grey
  //     backgroundColor: 'rgba(77,83,96,0.2)',
  //     borderColor: 'rgba(77,83,96,1)',
  //     pointBackgroundColor: 'rgba(77,83,96,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(77,83,96,1)'
  //   }

  // ];
  // public lineChartLegend:boolean = true;
  // public lineChartType:string = 'line';
  // // events
  // public chartClicked(e:any):void {
  //   console.log(e);
  // }
 
  // public chartHovered(e:any):void {
  //   console.log(e);
  // }
}
