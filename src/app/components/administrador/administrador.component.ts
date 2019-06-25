import { Component, OnInit, Input } from '@angular/core';
import { SedesService } from 'src/app/services/sedes.service';
import { SalasService } from 'src/app/services/salas.service';
import { MapaButacasServices } from 'src/app/services/mapas.services';
import { PeliculasService } from 'src/app/services/peliculas.services';
import { FuncionesService } from 'src/app/services/funciones.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  // Permitir Collapse
  public sedeIsCollapsed = true;
  public salaIsCollapsed = true;
  public mapaIsCollapsed = true;
  public funcionesIsCollapsed = true;

  nombres;
  reproducciones;
  tiposSala;
  idSalas;


  ubicacion;
  nombre;
  horaInicio;
  horaFin;
  tipoSala;
  tipoRepro;
  nombreSala;
  sala;
  columnas;
  filas;
  pasilloCentro;
  pasilloDerecho;
  pasilloIzquierdo;
  entradaDerecha;
  entradaIzquierda;
  salidaCentro;
  salidaDerecha;
  salidaIzquierda;
  funcFechaInicio;
  funcFechaFinal;
  pelicula;
  peliculas;
  idiomas;
  idioma;
  subtitulos;
  subtitulo;

  constructor(private sedesService: SedesService, private salasService: SalasService, private mapasService: MapaButacasServices, private peliculasService: PeliculasService, private funcionesService: FuncionesService) { }

  ngOnInit() {
    this.sedesService.getNombres().subscribe(data => this.nombres=data);
    this.salasService.getTipoRepro().subscribe(data => this.reproducciones=data);
    this.salasService.getTipoSala().subscribe(data => this.tiposSala=data);
    this.peliculasService.getPeliculas().subscribe(data => this.peliculas = data)
    this.peliculasService.getIdiomas().subscribe(data => this.idiomas = data)
    this.peliculasService.getSubtitulos().subscribe(data => this.subtitulos = data)
    
  }

  crearSede(){
    const sede = {
      nombre: this.nombre,
      ubicacion: this.ubicacion,
      inicioHorario: this.horaInicio,
      finHorario: this.horaFin
    }
    this.sedesService.guardarSede(sede).subscribe(data => console.log(data))
  }

  crearSala(){
    const sala = {
      idTipoSala: this.tipoSala,
      idTipoRepro: this.tipoRepro,
      nombreFiscal: this.nombreSala
    }
    this.salasService.guardarSala(sala).subscribe(data => console.log(data))
  }

  crearFuncion(){
    const funcion = {
      horarioInicio: this.funcFechaInicio,
      horarioFin: this.funcFechaFinal ,
      idIdioma: this.idioma,
      idSubtitulo: this.subtitulo,
      idSala: this.sala,
      idPelicula: this.pelicula
    }
    this.funcionesService.crear(funcion).subscribe(data => console.log(data))
  }


  escogerSalas(){
    this.salasService.getIdSala(this.nombreSala).subscribe(data => this.idSalas=data)
  }

  crearMapaButaca(){
    let salida = "ICD";
    let entrada = "ID";
    let pasillo = "ICD";
    if(!this.salidaDerecha)
        salida = salida.replace("D", "");
    if(!this.salidaIzquierda)
        salida = salida.replace("I","");
    if(!this.salidaCentro)
        salida = salida.replace("C", "");
    if(!this.pasilloDerecho)
        pasillo = pasillo.replace("D", "");
    if(!this.pasilloIzquierdo)
        pasillo = pasillo.replace("I","");
    if(!this.entradaDerecha)
        entrada = entrada.replace("D", "");
    if(!this.entradaIzquierda)
        entrada = entrada.replace("I","");
        if(!this.pasilloCentro)
        pasillo = pasillo.replace("C", "");
        else {
          if(!(Number.parseInt(this.columnas) %2 == 0)){
          alert("No puede tener columnas impares con un pasillo central");
        } else {
          this.mapasService.getTipoEntrada(entrada).subscribe(tipoEntrada => 
            this.mapasService.getTipoSalida(salida).subscribe(tipoSalida =>
              this.mapasService.getTipoPasillo(pasillo).subscribe(tipoPasillo =>{
                const mapaButaca = {
                cantidadFilas: this.filas,
                cantidadColumnas: this.columnas,
                idSala: this.sala,
                tipoSalida: tipoSalida[0].idSalida,
                tipoEntrada: tipoEntrada[0].idEntrada,
                tipoPasillo: tipoPasillo[0].idPasillo,
              }
              this.mapasService.guardarMapaButaca(mapaButaca).subscribe(data => console.log(data))
              }))
            )
        }
        }

        }
   
  
}
