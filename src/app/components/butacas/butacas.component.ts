import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/dataService";

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
  butacasCompradas = [12][24];
  funcion = {};
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
    let foundFila = false;
    let foundColumna = false;
    for (let f = 1; f < fila; f++) {
      foundFila = false;
      for (let c = 1; c <= columna; f++) {
        if (this.butacasCompradas[f][c - 1]) foundFila = true;
        if (
          this.butacasCompradas[f][c - 1] ||
          (this.butacasCompradas[f][c - 1] && c != columna)
        )
          foundColumna = true;
      }
      if (foundColumna && foundFila) {
        alert("Seleccione un asciento contiguo");
        break;
      }
    }
    if (!(foundColumna && foundFila)) {
      this.salaButacas.butacas[fila - 1][columna] = !this.salaButacas.butacas[
        fila - 1
      ][columna];

      this.butacasCompradas[fila - 1][columna] = true;
    }
  };

  ngOnInit() {
    this.funcion = this.dataService.getOption("funcion");
  }
}
