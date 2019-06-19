import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-cines",
  templateUrl: "./cines.component.html",
  styleUrls: ["./cines.component.css"]
})
export class CinesComponent implements OnInit {
  sedes = [
    {
      ubicacion: "Caracas",
      cines: [
        {
          nombreFiscal: 1,
          nombre: "el we",
          ubicacion: "Caracas",
          horarioInicio: new Date(),
          horarioFin: new Date()
        },
        {
          nombreFiscal: 2,
          nombre: "el we",
          ubicacion: "Caracas",
          horarioInicio: new Date(),
          horarioFin: new Date()
        },
        {
          nombreFiscal: 3,
          nombre: "mi",
          ubicacion: "Caracas",
          horarioInicio: new Date(),
          horarioFin: new Date()
        },
        {
          nombreFiscal: 4,
          nombre: "o",
          ubicacion: "Caracas",
          horarioInicio: new Date(),
          horarioFin: new Date()
        }
      ]
    },
    {
      ubicacion: "Apure",
      cines: [
        {
          nombreFiscal: 5,
          nombre: "o",
          ubicacion: "Apure",
          horarioInicio: new Date(),
          horarioFin: new Date()
        },
        {
          nombreFiscal: 6,
          nombre: "o",
          ubicacion: "Apure",
          horarioInicio: new Date(),
          horarioFin: new Date()
        },
        {
          nombreFiscal: 7,
          nombre: "o",
          ubicacion: "Apure",
          horarioInicio: new Date(),
          horarioFin: new Date()
        },
        {
          nombreFiscal: 8,
          nombre: "o",
          ubicacion: "Apure",
          horarioInicio: new Date(),
          horarioFin: new Date()
        }
      ]
    }
  ];

  constructor(private router: Router) {}

  selectCine(nombreFiscal: string) {
    this.router.navigate([`funciones/${nombreFiscal}`]);
  }

  ngOnInit() {}
}
