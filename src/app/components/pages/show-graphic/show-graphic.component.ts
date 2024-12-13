import { Component, OnInit } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { WeightService } from '../../../services/weight.service';
import { UsersService } from '../../../services/users.service';


@Component({
  selector: 'app-show-graphic',
  standalone: true,
  imports: [CanvasJSAngularChartsModule],
  templateUrl: './show-graphic.component.html',
  styleUrl: './show-graphic.component.css'
})
export class ShowGraphicComponent implements OnInit {
  loading=false;
  weightData!:any;
  chartOptions:any;


  constructor(private weightService:WeightService,private usersService:UsersService){}

  async ngOnInit(){

    this.loading=false;
    this.weightData=await this.weightService.getWeightForGraphic(this.usersService.usuario().id);
    console.log(this.weightData);
    let dataForChart=[];
    for(var i=0;i<this.weightData.length;i++)
    {
      var d={
        x: new Date(this.weightData[i].x),
        y:this.weightData[i].y
      };
      dataForChart.push(d);
    }
    this.loading=true;

    this.chartOptions = {
      title: {
        text: "Weight for "+ this.usersService.usuario().name+" "
      },
      data: [{
        type: "line",
			  xValueFormatString: "DD/MM/YYYY",
        dataPoints:dataForChart
      }]
    };
  }


}
