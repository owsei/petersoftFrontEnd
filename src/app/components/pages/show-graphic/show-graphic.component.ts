import { Component, OnInit } from '@angular/core';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';


@Component({
  selector: 'app-show-graphic',
  standalone: true,
  imports: [CanvasJSAngularChartsModule],
  templateUrl: './show-graphic.component.html',
  styleUrl: './show-graphic.component.css'
})
export class ShowGraphicComponent implements OnInit {
  chartOptions = {
    title: {
      text: "Basic Column Chart in Angular"
    },
    data: [{
      type: "line",
      dataPoints: [
      { label: "Apple",  y: 10  },
      { label: "Orange", y: 15  },
      { label: "Banana", y: 25  },
      { label: "Mango",  y: 30  },
      { label: "Grape",  y: 28  }
      ]
    }]
  };

  ngOnInit(): void {

  }


}
