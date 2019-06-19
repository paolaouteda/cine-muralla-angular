import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-butacas",
  templateUrl: "./butacas.component.html",
  styleUrls: ["./butacas.component.css"]
})
export class ButacasComponent implements OnInit {
  salaButacas = {
    tipoSalida: "ID", // Arriba max 3
    tipoPasillo: "C", // Max 3
    tipoEntrada: "I",
    numFilas: 12,
    numColumnas: 24,
    butacas: [[], [], [], [], [], [], [], [], [], [], [], []]
  };
  funcion = {};
  butacasCompradas = [];
  ultButaca = { fila: null, columna: null };
  constructor(private dataService: DataService) {}

  validarPasillo = () => {
    return this.salaButacas.tipoPasillo.includes("C");
  };

  validateButaca = (fila, columna) => {
    return this.salaButacas.butacas[fila - 1][columna];
  };

  filas = () => {
    var min = 1;
    var max = this.salaButacas.numFilas;
    var step = 1;
    var input = [];
    for (var i = min; i <= max; i += step) {
      input.push(i);
    }
    return input;
  };

  columnas = div => {
    var min = 1;
    var max = this.salaButacas.numColumnas / div;
    var step = 1;
    var input = [];
    for (var i = min; i <= max; i += step) {
      input.push(i);
    }
    return input;
  };

  reservarAsiento = (fila, columna) => {
    let index = this.butacasCompradas.findIndex(
      butaca =>
        butaca.fila === fila &&
        (butaca.columna == columna + 1 || butaca.columna == columna - 1)
    );
    if (
      this.butacasCompradas.length > 0 &&
      index !== -1 &&
      !this.butacasCompradas.some(
        butaca => butaca.fila === fila && butaca.columna === columna
      )
    ) {
      this.butacasCompradas.push({ fila, columna });
      this.salaButacas.butacas[fila - 1][columna] = !this.salaButacas.butacas[
        fila - 1
      ][columna];
    } else {
      if (this.butacasCompradas.length == 0) {
        if (!this.salaButacas.butacas[fila - 1][columna]) {
          this.butacasCompradas.push({ fila, columna });
          this.salaButacas.butacas[fila - 1][columna] = !this.salaButacas
            .butacas[fila - 1][columna];
        } else alert("Por favor seleccione un asiento disponible");
      } else {
        index = this.butacasCompradas.findIndex(
          butaca => butaca.fila === fila && butaca.columna == columna
        );
        if (index !== -1) {
          let init = this.butacasCompradas.findIndex(
            butaca => butaca.fila === fila && butaca.columna == columna - 1
          );
          let finish = this.butacasCompradas.findIndex(
            butaca => butaca.fila === fila && butaca.columna == columna + 1
          );
          if (init != -1 && finish != -1) {
            alert("Seleccione una butaca de los extremos");
          } else {
            this.salaButacas.butacas[fila - 1][columna] = !this.salaButacas
              .butacas[fila - 1][columna];
            this.butacasCompradas.splice(index, 1);
          }
        } else alert("Por favor seleccione un asiento contiguo");
      }
    }
  };

  ngOnInit() {
    this.funcion = this.dataService.getOption("funcion");
  }
}
