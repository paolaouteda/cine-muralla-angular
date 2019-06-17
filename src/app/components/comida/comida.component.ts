import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.css']
})
export class ComidaComponent implements OnInit {

  combos = [{combo: {
    id:1,
    nombre: 'combo de mentira'
  }, comidas:  [{id: 1, categoria: 'chucheria', nombre: 'panqueca'}, {id: 2, categoria: 'dulce', nombre: 'torta'},{id: 3, categoria: 'salado', nombre: 'mani'}]
},{combo: {
  id:2,
  nombre: 'combo de mentira 2'
}, comidas:  [{id: 3, categoria: 'chucheria', nombre: 'doritos'}, {id: 4, categoria: 'dulce', nombre: 'pastel'}]
}, {combo: {
  id:3,
  nombre: 'combo de mentira 3'
}, comidas:  [{id: 4, categoria: 'salado', nombre: 'Omar'}]
}];

  constructor() { }

  ngOnInit() {
  }

}
