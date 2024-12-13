import { User } from '../interfaces/user';
import { Mainmenu } from '../interfaces/mainmenu';
import { ApiLumenService } from './api-lumen.service';
import { Injectable, OnInit,signal,Signal  } from '@angular/core';
import { HttpParams  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService implements OnInit {

  private _user=signal<User|null>(null);
  private _mainMenu=signal<Array<Mainmenu>>(new Array());

  constructor(private apiLumenService:ApiLumenService) { }

  ngOnInit(): void {

  }

  //USUARIO
  get user():Signal<User|null>{
    return this._user.asReadonly();
  }

  setUser(user: User): void {
    this._user.set(user);
  }

  updateUser(partialUser: Partial<User>): void {
    const currentUser = this._user();
    if (currentUser) {
      this._user.set({
        ...currentUser,
        ...partialUser,
      });
    }
  }

  clearUser(): void {
    this._user.set(null);
  }


  //MENU PRINCIPAL
  async getmainMenu(){
    const currentMenu = this._mainMenu();
    if (currentMenu.length==0)
    {
      let dataMenu = await this.apiLumenService.getDataJsonAsync('http://localhost:3000/menu');
      // let dataMenu = await this.apiLumenService.postDataObservableAsync('getMainMenu')
      this._mainMenu.set(dataMenu);
    }
    return this._mainMenu();
  }





}
