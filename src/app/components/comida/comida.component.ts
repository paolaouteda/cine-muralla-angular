import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comida',
  templateUrl: './comida.component.html',
  styleUrls: ['./comida.component.css']
})
export class ComidaComponent implements OnInit {

  combos = [
    {
      comidas: [
        {
          nombre: 'Ferresco',
          cantidad: 2
        },
        {
          nombre: 'kotufa',
          cantidad: 99
        }
      ],
      nombre: 'Mega Kmbito'
    },
    {
      comidas: [
        {
          nombre: 'Ferresco',
          cantidad: 2
        },
        {
          nombre: 'kotufa',
          cantidad: 99
        }
      ],
      nombre: 'Mega Kmbito'
    },
    {
      comidas: [
        {
          nombre: 'Ferresco',
          cantidad: 2
        },
        {
          nombre: 'kotufa',
          cantidad: 99
        }
      ],
      nombre: 'Mega Kmbito'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
