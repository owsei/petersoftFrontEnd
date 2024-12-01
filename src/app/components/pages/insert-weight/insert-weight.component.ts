import { Component } from '@angular/core';

@Component({
  selector: 'app-insert-weight',
  standalone: true,
  imports: [],
  templateUrl: './insert-weight.component.html',
  styleUrl: './insert-weight.component.css'
})
export class InsertWeightComponent {

  constructor(){

  }


  insertWeight(){
    alert("Pulsado");
  }

}
