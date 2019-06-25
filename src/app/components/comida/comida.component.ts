import { Component, OnInit } from "@angular/core";
import { CombosService } from "src/app/services/combos.service";
import { DataService } from "src/app/services/data.service";
import { FuncionesService } from "src/app/services/funciones.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-comida",
  templateUrl: "./comida.component.html",
  styleUrls: ["./comida.component.css"]
})
export class ComidaComponent implements OnInit {
  combos = [];

  constructor(
    private combosService: CombosService,
    private dataService: DataService,
    private funcionesService: FuncionesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.combosService.getCombos().subscribe(data => {
      this.combos = data;
      let organizados = [];
      this.combos.forEach(combo => {
        if (organizados.some(org => org.comboNombre == combo.comboNombre))
          organizados[
            organizados.findIndex(org => org.comboNombre == combo.comboNombre)
          ].comidas.push({
            comidaNombre: combo.comidaNombre,
            cantidad: combo.cantidadComida
          });
        else
          organizados.push({
            ...combo,
            comidas: [
              {
                comidaNombre: combo.comidaNombre,
                cantidad: combo.cantidadComida
              }
            ]
          });
      });

      this.combos = organizados;
    });
  }

  comprar(idCombo: number) {
    const compra = this.dataService.getOption("compra");
    compra.idCombo = idCombo;
    this.funcionesService.comprar(compra).subscribe(data => console.log(data));
    this.router.navigate(["/"]);
  }
}
