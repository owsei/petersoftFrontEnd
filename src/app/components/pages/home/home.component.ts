import { WeightService } from './../../../services/weight.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  loading=false;
  weightData!:any;

  constructor(private weightService:WeightService){}

  async ngOnInit(){

    this.loading=false;
    this.weightData=await this.weightService.getWeight();
    this.loading=true;
  }




}
