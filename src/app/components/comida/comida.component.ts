import { Component, OnInit } from "@angular/core";
import { CombosService } from "src/app/services/combos.service";

@Component({
  selector: "app-comida",
  templateUrl: "./comida.component.html",
  styleUrls: ["./comida.component.css"]
})
export class ComidaComponent implements OnInit {
  combos = [];

  constructor(private combosService: CombosService) {}

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
      console.log(this.combos);
    });
  }
}
