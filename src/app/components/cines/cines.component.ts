import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cines',
  templateUrl: './cines.component.html',
  styleUrls: ['./cines.component.css']
})
export class CinesComponent implements OnInit {
  sedes = [
    {
      estado: 'Caracas',
      cines: [
        {
          nombreFiscal: 1,
          nombre: "el we",
          ubicacion: 'La castellana',
          horarioInicio: new Date(),
          horarioFin: new Date()
        },
        {
          nombreFiscal: 2,
          nombre: "el we",
          ubicacion: 'La castellana',
          horarioInicio: new Date(),
          horarioFin: new Date()
        },
        {
          nombreFiscal: 3,
          nombre: "mi",
          ubicacion: 'La castellana',
          horarioInicio: new Date(),
          horarioFin: new Date()
        },
        {
          nombreFiscal: 4,
          nombre: "o",
          ubicacion: 'La castellana',
          horarioInicio: new Date(),
          horarioFin: new Date()
        }
      ]
    },
    {
      estado: 'Apure',
      cines: [
        {
          nombreFiscal: 5,
          nombre: "o",
          ubicacion: 'La castellana',
          horarioInicio: new Date(),
          horarioFin: new Date()
        },
        {
          nombreFiscal: 6,
          nombre: "o",
          ubicacion: 'La castellana',
          horarioInicio: new Date(),
          horarioFin: new Date()
        },
        {
          nombreFiscal: 7,
          nombre: "o",
          ubicacion: 'La castellana',
          horarioInicio: new Date(),
          horarioFin: new Date()
        },
        {
          nombreFiscal: 8,
          nombre: "o",
          ubicacion: 'La castellana',
          horarioInicio: new Date(),
          horarioFin: new Date()
        }
      ]
    }
  ];

  constructor(private router: Router) {}

  selectCine(nombreFiscal: string) {
    this.router.navigate([`cartelera/${nombreFiscal}`]);
  }

  ngOnInit() {}
}
