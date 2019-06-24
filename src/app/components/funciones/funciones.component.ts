import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "../../services/data.service";
import { SedesService } from 'src/app/services/sedes.service';

@Component({
  selector: "app-funciones",
  templateUrl: "./funciones.component.html",
  styleUrls: ["./funciones.component.css"]
})
export class FuncionesComponent implements OnInit {
  constructor(
    private sedesService: SedesService,
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}
  funciones;
  nombreFiscal = "";

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.nombreFiscal = params.get("nombreFiscal");
      this.sedesService.getFuncionesBySede(Number.parseInt(this.nombreFiscal)).subscribe(data =>{ 
        console.log(data);
        this.funciones = data
      });

    });
  }

  reservar(funcion: any) {
    this.dataService.setOption("funcion", funcion);
    this.router.navigate([`butacas/${funcion.pelicula.id}`]);
  }
}
