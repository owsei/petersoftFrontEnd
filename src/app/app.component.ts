import { Component, effect, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ImportsModule } from './modules/imports/imports.module';
import { MainMenuComponent } from "./components/pages/main-menu/main-menu.component";
import { UsersService } from './services/users.service';
import { User } from './interfaces/user';
import { UserMenuComponent } from './components/usuarios/user-menu/user-menu.component';

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
    MainMenuComponent,
    UserMenuComponent
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

  usuarioActual:User=({id:0,name:'',token:'',userid:''});

  constructor(public userService:UsersService){
    effect(() => {
      this.usuarioActual = this.userService.usuario();
    });
  }

  ngOnInit() {
  }


  cerrarSesion(){
    this.userService.cerrarSesion();
  }


}
