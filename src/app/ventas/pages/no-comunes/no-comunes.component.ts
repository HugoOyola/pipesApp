import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  nombre: string = 'Susana'
  genero: string = 'femenino'

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes:string [] = ['Hugo', 'Pedro', 'Alexia', 'Shirley', 'Consuelo']
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente(){
    this.nombre = 'Hugo'
    this.genero = 'masculino'
  }

  borrarCliente(){
    this.clientes.shift()
  }

  // KeyValue Pipe
  persona={
    nombre: 'Hugo',
    edad: 32,
    direccion: 'Buenos Aires 229'
  }

  //JSON Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true

    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]
}
