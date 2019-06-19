import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  images = [1, 2, 3].map(
    () => `https://picsum.photos/900/500?random&t=${Math.random()}`
  );
  funciones = [
    {
      horarioInicio: new Date(),
      horarioFin: new Date(),
      sala: {
        id: 1,
        tipo: "premium",
        repro: "3D"
      },
      pelicula: {
        id: 1,
        duracion: 120,
        titulo: "Pepo y los pepos magicos",
        descripcion:
          "Pelicula de ejemplo basada en la noche en la que que pepo preferia madrugar y trabajar en esto que dormir con los ronquidos de Armando",
        imagen: "https://i.blogs.es/5efe2c/cap_001/450_1000.jpg",
        genero: "Accion",
        censura: "A",
        fechaEstreno: new Date()
      },
      idioma: "ingles",
      subtitulos: "espanol"
    },
    {
      horarioInicio: new Date(),
      horarioFin: new Date(),
      sala: {
        id: 2,
        tipo: "normal",
        repro: "4DX"
      },
      pelicula: {
        id: 2,
        duracion: 120,
        titulo: "Attack on Titan",
        imagen:
          "https://cdn.gbposters.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/t/attack-on-titan-season-2-key-art-maxi-poster-1.133.jpg",
        descripcion:
          "pelicula de ejemplo basada en la noche en la que que pepo preferia madrugar y trabajar en esto que dormir con los ronquidos de Armando",
        genero: "Accion",
        censura: "A",
        fechaEstreno: new Date()
      },
      idioma: "ingles",
      subtitulos: "espanol"
    },
    {
      horarioInicio: new Date(),
      horarioFin: new Date(),
      sala: {
        id: 3,
        tipo: "premium",
        repro: "3D"
      },
      pelicula: {
        id: 1,
        duracion: 120,
        titulo: "Pepo y los pepos magicos",
        descripcion:
          "Pelicula de ejemplo basada en la noche en la que que pepo preferia madrugar y trabajar en esto que dormir con los ronquidos de Armando",
        imagen: "https://i.blogs.es/5efe2c/cap_001/450_1000.jpg",
        genero: "Accion",
        censura: "A",
        fechaEstreno: new Date()
      },
      idioma: "ingles",
      subtitulos: "espanol"
    },
    {
      horarioInicio: new Date(),
      horarioFin: new Date(),
      sala: {
        id: 4,
        tipo: "premium",
        repro: "3D"
      },
      pelicula: {
        id: 1,
        duracion: 120,
        titulo: "Pepo y los pepos magicos",
        descripcion:
          "Pelicula de ejemplo basada en la noche en la que que pepo preferia madrugar y trabajar en esto que dormir con los ronquidos de Armando",
        imagen: "https://i.blogs.es/5efe2c/cap_001/450_1000.jpg",
        genero: "Accion",
        censura: "A",
        fechaEstreno: new Date()
      },
      idioma: "ingles",
      subtitulos: "espanol"
    }
  ];

  verPelicula(funcion: any) {
    this.dataService.setOption("pelicula", funcion);
    this.router.navigate([`peliculas/${funcion.pelicula.id}`]);
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit() {}
}
