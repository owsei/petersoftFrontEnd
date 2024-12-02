import { Component, OnInit } from '@angular/core';
import {Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ImportsModule } from '../../../modules/imports/imports.module'

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [FormsModule,ImportsModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent implements OnInit {

  menuItems:any;
  constructor(private router:Router){}

  ngOnInit() {

    this.menuItems=[
      {id:1,name :'Home',route:'/home',isDropDown:false,parent:true,order:1},
      {id:2,name:'Insert Weight',route:'/insertWeigth',isDropDown:false,parent:true,order:2},
      {id:6,name:'Show graphic',route:'/showGraphic',isDropDown:false,parent:true,order:6},
      {id:3,name:'Weight',route:'',isDropDown:true,parent:true,order:3},
      {id:4,name:'Insert',route:'/insertWeigth',isDropDown:false,parent:false,idParent:3,order:1},
      {id:5,name:'Show graphic',route:'/showGraphic',isDropDown:false,parent:false,idParent:3,order:1},
      // {id:6,name:'Otro Menu',route:'/links',isDropDown:true,parent:true,order:4},
      // {id:7,name:'Links de otro',route:'/linksDesplegableDeOtro',isDropDown:false,parent:false,idParent:6,order:1},
    ]
  }


  mainPageRedirection(){
    this.router.navigateByUrl('');
  }

}
