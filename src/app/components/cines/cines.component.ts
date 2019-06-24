import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SedesService } from "src/app/services/sedes.service";

@Component({
  selector: "app-cines",
  templateUrl: "./cines.component.html",
  styleUrls: ["./cines.component.css"]
})
export class CinesComponent implements OnInit {
  sedes;

  constructor(private router: Router, private sedesService: SedesService) {}

  selectCine(nombreFiscal: number) {
    this.router.navigate([`funciones/${nombreFiscal}`]);
  }

  ngOnInit() {
    this.sedesService.getSedes().subscribe(data => {
      this.sedes = data;
      let organizedSedes = [];
      this.sedes.forEach(sede => {
        let index = organizedSedes.findIndex(
          org => org.ubicacion == sede.ubicacion
        );
        if (index !== -1) organizedSedes[index].cines.push(sede);
        else organizedSedes.push({ ubicacion: sede.ubicacion, cines: [sede] });
      });
      this.sedes = organizedSedes;
    });
  }
}
