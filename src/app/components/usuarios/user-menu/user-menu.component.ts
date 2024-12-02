import { Component,effect } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../interfaces/user';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.css'
})
export class UserMenuComponent {

  usuarioActual:User=({id:0,name:'',token:'',userid:''});
  constructor(public userService:UsersService){
    effect(() => {
      this.usuarioActual = this.userService.usuario();
    });
  }

  cerrarSesion(){
    this.userService.cerrarSesion();
  }
}
