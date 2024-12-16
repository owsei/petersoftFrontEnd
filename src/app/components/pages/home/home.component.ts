import { UsersService } from './../../../services/users.service';
import { WeightService } from './../../../services/weight.service';
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

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

  constructor(private weightService:WeightService,private usersService:UsersService){}

  async ngOnInit(){

    this.loading=false;
    var user=this.usersService.usuario();
    if(user)
      this.weightData=await this.weightService.getWeight(this.usersService.usuario().id);
    this.loading=true;
  }




}
