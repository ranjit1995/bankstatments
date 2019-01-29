import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.component';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  chartData : any = [];
  credit : any = [];
  debit : any =[];
  sale : any = [];
  delivery : any = [];
  hr : any = [];
  Form : any = [];
  len : number = 1;
  allChartData: any = [];
  extra: any = [];

  
  // public lineChartData:Array<any> = [
  //    {data: [this.credit], label: 'credit'},
  //    {data: [this.debit], label: 'debit'},
  //    {data: [this.sale], label: 'sale'},
  //    {data: [this.delivery], label: 'delivery'},
  //    {data: [this.hr], label: 'hr'},
  //    {data: [this.Form], label: 'Form'}
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
    this.Auth.ChartDetails().subscribe(data => 
    {
      this.chartData = data; 
      for(let purName of this.chartData.tagdata)
      {
        for(let amount of this.chartData.data)
        {
          switch(purName.name)
          { 
            case "credit" : if(this.len==1)
                            {
                              this.credit.push(purName.name);
                              for(let single of amount)
                              {
                                this.credit.push(single);
                              }
                              this.len++;
                            }
                            break;
            case "debit"  : if(this.len<=2)
                            {
                              this.extra.push(amount);
                              this.len++;
                            }
                            else if(this.len==3)
                            {
                              this.debit.push(purName.name);
                              for(let single of amount)
                              {
                                this.debit.push(single);
                              }
                              this.len++;
                            }
                            break;
            case "sale" : if(this.len<=5)
                          {
                            this.extra.push(amount);
                            this.len++;
                          }
                          else if(this.len==6)
                          {
                            this.sale.push(purName.name);
                            for(let single of amount)
                            {
                              this.sale.push(single);
                            }
                            this.len++;
                          }
                          break;
            case "delivery" : if(this.len<=9)
                              {
                                this.extra.push(amount);
                                this.len++;
                              }
                              else if(this.len==10)
                              {
                                this.delivery.push(purName.name);
                                for(let single of amount)
                                {
                                  this.delivery.push(single);
                                }
                                this.len++;
                              }
                              break;
            case "hr" : if(this.len<=14)
                        {
                          this.extra.push(amount);
                          this.len++;
                        }
                        else if(this.len==15)
                        {
                          this.hr.push(purName.name);
                          for(let single of amount)
                          {
                            this.hr.push(single);
                          }
                          this.len++;
                        }
                        break;
            case "Form" : if(this.len<=20)
                          {
                            this.extra.push(amount);
                            this.len++;
                          }
                          else if(this.len==21)
                          {
                            this.Form.push(purName.name);
                            for(let single of amount)
                            {
                              this.Form.push(single);
                            }
                            this.len++;
                          }
                          break;
            default : "Error";
          }
        }
      }
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
