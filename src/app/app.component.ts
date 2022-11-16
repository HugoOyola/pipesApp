import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'huGo oyOlA'
  valor: number = 1000
  obj = {
    nombre: 'Hugo'
  }

  mostrarNombre(){
    console.log(this.nombre);
  }
}
