import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ImportsModule } from './modules/imports/imports.module';
import { MainMenuComponent } from "./components/pages/main-menu/main-menu.component";

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
    MainMenuComponent
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

  constructor(){

  }

  ngOnInit() {


  }




}
