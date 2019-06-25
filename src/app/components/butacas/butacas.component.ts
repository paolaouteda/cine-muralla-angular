import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Router, ActivatedRoute } from "@angular/router";
import { MapaButacasServices } from "src/app/services/mapas.services";
import { SalasService } from "../../services/salas.service";
import { FuncionesService } from "src/app/services/funciones.service";

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
    butacas: []
  };

  mapaButaca;
  funcion;
  butacasCompradas = [];
  textoEntradas = "La sala";
  textoPasillos = "La sala";
  textoSalidas = "La sala";

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute,
    private mapaButacasServices: MapaButacasServices,
    private salasService: SalasService,
    private funcionesServices: FuncionesService
  ) {}

  validarPasillo = () => {
    return this.salaButacas.tipoPasillo.includes("F");
  };

  validateButaca = (fila, columna) => {
    const butaca = this.salaButacas.butacas.find(
      butaca => butaca.numColumna == columna && butaca.numFila == fila
    );

    return butaca && butaca.disponible == 0;
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
      this.salaButacas.butacas.map(butaca =>
        butaca.numColumna == columna && butaca.numFila == fila
          ? (butaca.disponible = 0)
          : butaca
      );
    } else {
      if (this.butacasCompradas.length == 0) {
        const butaca = this.salaButacas.butacas.find(
          butaca => butaca.numColumna == columna && butaca.numFila == fila
        );
        if (butaca.disponible == 1) {
          this.butacasCompradas.push({ fila, columna });
          butaca.disponible = 0;
          this.salaButacas.butacas[
            this.salaButacas.butacas.findIndex(b => b == butaca)
          ] = butaca;
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
            const butaca = this.salaButacas.butacas.find(
              butaca => butaca.numColumna == columna && butaca.numFila == fila
            );
            if (butaca.disponible == 1) butaca.disponible = 0;
            else butaca.disponible = 1;

            this.salaButacas[
              this.salaButacas.butacas.findIndex(b => b == butaca)
            ] = butaca;
            this.butacasCompradas.splice(index, 1);
          }
        } else alert("Por favor seleccione un asiento contiguo");
      }
    }
  };

  comprar() {
    if (this.butacasCompradas.length > 0) {
      const comprarComida = confirm("Desea comprar un combo adicionalmente?");
      const compra = {
        idFuncion: this.funcion.idFuncion,
        asientos: this.butacasCompradas.length
      };

      this.butacasCompradas.map(butaca => {
        const butacaComprada = {
          idSala: this.funcion.idSala,
          columna: butaca.columna,
          fila: butaca.fila,
          idFuncion: this.funcion.idFuncion
        };
        this.salasService.reservar(butacaComprada).subscribe();
      });

      if (comprarComida) {
        this.dataService.setOption("compra", compra);
        this.router.navigate(["/comida"]);
      } else {
        this.funcionesServices
          .comprar(compra)
          .subscribe(data => console.log(data));
        this.router.navigate(["/"]);
      }
    } else {
      alert("Por favor compre alguna butaca");
    }
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let funcionId = Number.parseInt(params.get("id"));
      this.funcion = this.dataService.getOption("funcion");
      this.mapaButacasServices.getMapaButaca(funcionId).subscribe(data => {
        this.mapaButaca = data[0];
        this.salaButacas.numColumnas = this.mapaButaca.cantidadColumnas;
        this.salaButacas.numFilas = this.mapaButaca.cantidadFilas;
        this.salaButacas.tipoPasillo = this.mapaButaca.nombrePasillo;
        this.salaButacas.tipoEntrada = this.mapaButaca.nombreEntrada;
        this.salaButacas.tipoSalida = this.mapaButaca.nombreSalida;

        if (this.salaButacas.tipoPasillo.length > 0) {
          this.textoPasillos += " posee";

          if (this.salaButacas.tipoPasillo.includes("C"))
            this.textoPasillos += " un pasillo central";
          if (this.salaButacas.tipoPasillo.includes("I"))
            this.textoPasillos += " un pasillo izquierdo";
          if (this.salaButacas.tipoPasillo.includes("D"))
            this.textoPasillos += " un pasillo derecho";
        } else {
          this.textoPasillos += " no posee pasillos";
        }

        if (this.salaButacas.tipoEntrada.length > 0) {
          this.textoEntradas += " posee";

          if (this.salaButacas.tipoEntrada.includes("C"))
            this.textoEntradas += " una entrada central";
          if (this.salaButacas.tipoEntrada.includes("I"))
            this.textoEntradas += " una entrada izquierda";
          if (this.salaButacas.tipoEntrada.includes("D"))
            this.textoEntradas += " una entrada derecha";
        } else {
          this.textoEntradas += " no posee entradas";
        }

        if (this.salaButacas.tipoSalida.length > 0) {
          this.textoSalidas += " posee";

          if (this.salaButacas.tipoSalida.includes("C"))
            this.textoSalidas += " una salida central";
          if (this.salaButacas.tipoSalida.includes("I"))
            this.textoSalidas += " una  salida izquierda";
          if (this.salaButacas.tipoSalida.includes("D"))
            this.textoSalidas += " una salida derecha";
        } else {
          this.textoSalidas += " no posee salidas";
        }
      });
      this.salasService
        .getButacasByFuncion(funcionId)
        .subscribe(data => (this.salaButacas.butacas = data));
    });
    this.funcion = this.dataService.getOption("funcion");
  }
}
