import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  peliculas = [
    {
      id: 1,
      titulo: "esto es un titulo",
      imagenHorizontal: "https://i.ytimg.com/vi/gn1pz0rnNHs/maxresdefault.jpg"
    },
    {
      id: 2,
      titulo: "Pelicula numero 2",
      imagenHorizontal: "https://i.ytimg.com/vi/OY8fBsvRSQQ/hqdefault.jpg"
    },
    {
      id: 3,
      titulo: "Pelicula numero 3",
      imagenHorizontal:
        "https://cronicaglobal.elespanol.com/uploads/s1/32/95/84/4/alpha.jpeg"
    }
  ];

  verPelicula(peliculaId: number) {
    this.router.navigate([`pelicula/${peliculaId}`]);
  }

  constructor(private router: Router) {}

  ngOnInit() {}
}
