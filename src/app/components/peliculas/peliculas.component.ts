import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "src/app/services/data.service";
import { FuncionesService } from "src/app/services/funciones.service";

@Component({
  selector: "app-peliculas",
  templateUrl: "./peliculas.component.html",
  styleUrls: ["./peliculas.component.css"]
})
export class PeliculasComponent implements OnInit {
  peliculaId: number;
  titulo = "ejemplo de titulo";
  funcionesPelicula;

  constructor(
    private router: Router,
    private dataService: DataService,
    private route: ActivatedRoute,
    private funcionesService: FuncionesService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.peliculaId = parseInt(params.get("id"));

      this.funcionesService
        .getFuncionesByPelicula(this.peliculaId)
        .subscribe(data => {
          this.funcionesPelicula = data;
          this.funcionesPelicula = this.funcionesPelicula.filter(funcion => {
            let date = new Date(funcion.horarioInicio);
            return new Date() <= date;
          });
        });
    });
  }

  reservar(funcion: any) {
    this.dataService.setOption("funcion", funcion);
    this.router.navigate([`butacas/${funcion.pelicula.id}`]);
  }
}
