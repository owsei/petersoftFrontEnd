import { AfterViewInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import flatpickr from 'flatpickr';

@Component({
  selector: 'app-insert-weight',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './insert-weight.component.html',
  styleUrl: './insert-weight.component.css'
})
export class InsertWeightComponent implements AfterViewInit{

  selectedDate:Date=new Date();
  peso:any;
  constructor(){

  }
  ngAfterViewInit(): void {
    flatpickr('#calendar', {
      dateFormat: 'd-m-Y', // Formato de fecha
      enableTime: false, //true,   // Habilitar selector de hora
      time_24hr: true,    // Mostrar en formato 24 horas
      onChange: (selectedDate) => {
        console.log('Fecha seleccionada:', selectedDate);
      }
    });
  }



  insertWeight(){
    alert("Fecha:"+this.selectedDate + " - Peso "+ this.peso);
  }

}
