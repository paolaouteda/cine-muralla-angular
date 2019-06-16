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
      id: 1,
      estado: "Caracas",
      cines: [
        {
          nombreFiscal: "SAN IGNACIO",
          ubicacion: "La castellana",
          horarioInicio: new Date(),
          horarioFin: new Date()
        },
        {
          nombreFiscal: "El Recreo",
          ubicacion: "La castellana",
          horarioInicio: new Date(),
          horarioFin: new Date()
        },
        {
          nombreFiscal: "Tolon",
          ubicacion: "La castellana",
          horarioInicio: new Date(),
          horarioFin: new Date()
        },
        {
          nombreFiscal: "El Millenium",
          ubicacion: "La castellana",
          horarioInicio: new Date(),
          horarioFin: new Date()
        }
      ]
    },
    {
      id: 2,
      estado: "Apure",
      cines: [
        {
          nombreFiscal: "SAN IGNACIO",
          ubicacion: "La castellana",
          horarioInicio: new Date(),
          horarioFin: new Date()
        },
        {
          nombreFiscal: "El Recreo",
          ubicacion: "La castellana",
          horarioInicio: new Date(),
          horarioFin: new Date()
        },
        {
          nombreFiscal: "Tolon",
          ubicacion: "La castellana",
          horarioInicio: new Date(),
          horarioFin: new Date()
        },
        {
          nombreFiscal: "El Millenium",
          ubicacion: "La castellana",
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
