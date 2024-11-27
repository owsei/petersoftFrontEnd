import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ImportsModule } from './modules/imports/imports.module';

interface City {
  name: string;
  code: string;
}


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ImportsModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'Gráfica Pesos';
  date: Date | undefined;
  color: string | undefined;


  cities: City[] | undefined;

  selectedCity: City | undefined;

  menuItems:any;

  ngOnInit() {
      this.cities = [
          { name: 'New York', code: 'NY' },
          { name: 'Rome', code: 'RM' },
          { name: 'London', code: 'LDN' },
          { name: 'Istanbul', code: 'IST' },
          { name: 'Paris', code: 'PRS' }
      ];


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

}
