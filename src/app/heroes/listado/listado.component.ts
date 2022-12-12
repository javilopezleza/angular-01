import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  personajes: string[] = ['Agaporni', 'Knosiil', 'Fussy', 'Agadora', 'Monksila'];
  personajesBorrados: string = "";


  borrarPersonaje() {
    this.personajesBorrados = this.personajes.shift() || "";
    // this.heroes.splice(-1)
    // 

  }

}
