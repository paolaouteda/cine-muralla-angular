import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "../../services/data.service";
import { CarteleraService } from "src/app/services/cartelera.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  peliculas;

  verPelicula(peliculaId: number) {
    this.router.navigate([`pelicula/${peliculaId}`]);
  }

  constructor(
    private router: Router,
    private carteleraService: CarteleraService
  ) {}

  ngOnInit() {
    this.carteleraService
      .getPeliculas()
      .subscribe(data => (this.peliculas = data), error => console.log(error));
  }
}
