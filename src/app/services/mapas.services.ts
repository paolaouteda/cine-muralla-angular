import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class MapaButacasServices {
  ruta = "http://localhost:3000/mapas";
  constructor(private http: HttpClient) {}

  getMapaButaca(idFuncion: number) {
    return this.http.get(`${this.ruta}/${idFuncion}`);
  }

  guardarMapaButaca(mapa){
    return this.http.post(`${this.ruta}/crear`, mapa);
  }

  getTipoPasillo(pasillo: string){
    return this.http.get(`${this.ruta}/tipoPasillo/${pasillo}`);
  }

  getTipoEntrada(entrada: string){
    return this.http.get(`${this.ruta}/tipoEntrada/${entrada}`);
  }

  getTipoSalida(salida: string){
    return this.http.get(`${this.ruta}/tipoSalida/${salida}`);
  }
}
