import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.css']
})
export class ComidaComponent implements OnInit {

  combos = [{
    combo: {
      id: 1,
      nombre: 'combo de mentira'
    },
     comidas: [{ id: 1, categoria: 'chucheria', nombre: 'panqueca', cantidad: 2 },
     { id: 2, categoria: 'dulce', nombre: 'torta', cantidad: 5 },
    { id: 3, categoria: 'salado', nombre: 'mani', cantidad: 20 }]
  }, {
    combo: {
      id: 2,
      nombre: 'combo de mentira 2'
    }, comidas: [{ id: 3, categoria: 'chucheria', nombre: 'doritos', cantidad: 10 },
     { id: 4, categoria: 'dulce', nombre: 'pastel', cantidad: 99999 }]
  }, {
    combo: {
      id: 3,
      nombre: 'combo de mentira 3'
    }, comidas: [{ id: 4, categoria: 'salado', nombre: 'Omar', cantidad: 999999999999999999999999999999999999999999999999999999999999999999999999999 }]
  }];

  constructor() { }

  ngOnInit() {
  }

}
