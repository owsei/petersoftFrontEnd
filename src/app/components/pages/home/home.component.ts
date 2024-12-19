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

  user:any;
  constructor(private weightService:WeightService,private usersService:UsersService){}

  async ngOnInit(){

    this.loading=false;
    this.user=this.usersService.usuario();
    if(this.user && this.user.id!=null)
      this.weightData=await this.weightService.getWeight(this.usersService.usuario().id);
    this.loading=true;
  }


  updateRow(id:any){
    console.log(id);
  }

  async deletetWeight(idWeight:any){
    await this.weightService.deletetWeight(this.user.id,idWeight);
    this.weightData=await this.weightService.getWeight(this.usersService.usuario().id);
  }


}
