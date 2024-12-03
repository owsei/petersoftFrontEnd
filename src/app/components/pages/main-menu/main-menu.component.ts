import { Component, OnInit } from '@angular/core';
import {Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ImportsModule } from '../../../modules/imports/imports.module'
import { MenuService } from '../../../services/menu.service';
import { Mainmenu } from '../../../interfaces/mainmenu'


@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [FormsModule,ImportsModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.css'
})
export class MainMenuComponent implements OnInit {

  menuItems!:any;
  constructor(private router:Router,private menuService:MenuService){}

  async ngOnInit() {
    this.menuItems=await this.menuService.getmainMenu();
    // this.menuItems=menuData;
    // console.log(this.menuItems);
  }

  mainPageRedirection(){
    this.router.navigateByUrl('');
  }

}
