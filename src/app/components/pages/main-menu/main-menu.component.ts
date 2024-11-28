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
      {id:2,name:'Link',route:'/links',isDropDown:false,parent:true,order:2},
      {id:3,name:'Desplegable',route:'',isDropDown:true,parent:true,order:3},
      {id:4,name:'Action',route:'/actionsDesplegable',isDropDown:false,parent:false,idParent:3,order:1},
      {id:5,name:'Links',route:'/linksDesplegable',isDropDown:false,parent:false,idParent:3,order:1},
      {id:6,name:'Otro Menu',route:'/links',isDropDown:true,parent:true,order:4},
      {id:7,name:'Links de otro',route:'/linksDesplegableDeOtro',isDropDown:false,parent:false,idParent:6,order:1},
    ]
  }


  mainPageRedirection(){
    this.router.navigateByUrl('');
  }

}
