import { AfterViewInit, Component, } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import flatpickr from 'flatpickr';
import { WeightService } from '../../../services/weight.service';
import { UsersService } from '../../../services/users.service';
import { DatePipe } from '@angular/common';
import moment from 'moment';

@Component({
  selector: 'app-insert-weight',
  standalone: true,
  imports: [FormsModule],
  providers: [DatePipe],
  templateUrl: './insert-weight.component.html',
  styleUrl: './insert-weight.component.css'
})
export class InsertWeightComponent implements AfterViewInit{

  selectedDate =moment().format('DD/MM/YYYY');
  fechaTransformada:any;
  peso:any;
  constructor(private weightService:WeightService,public userService:UsersService,private router:Router,private datePipe: DatePipe){
  }
  ngAfterViewInit(): void {
    flatpickr('#calendar', {
      dateFormat: 'd/m/Y', // Formato de fecha
      enableTime: false, //true,   // Habilitar selector de hora
      time_24hr: true,    // Mostrar en formato 24 horas
      onChange: (selectedDate) => {

        console.log('Fecha seleccionada:', selectedDate);

        const datePart = selectedDate.toLocaleString().split(',')[0].split('/');
        const fecha = new Date(+datePart[2], +datePart[1] - 1, +datePart[0]);
        // Transforma la fecha al formato Y-m-d
        this.fechaTransformada = this.datePipe.transform(fecha, 'yyyy-MM-dd') || '';
      }
    });
  }

  async insertWeight(){
    console.log(this.selectedDate);
    var datePart=this.selectedDate.split('/');
    var d=new Date( new Date(+datePart[2], +datePart[1] - 1, +datePart[0]));
    this.fechaTransformada = this.datePipe.transform(d, 'yyyy-MM-dd') || '';

    if (this.fechaTransformada!='' && this.peso!=''){
      let response= await this.weightService.insertWeight(this.userService.usuario().id,this.fechaTransformada,this.peso);
      this.router.navigate(['/home']);
    }
    else
      alert("Faltan datos");


  }

}
