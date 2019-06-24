import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class MapaButacasServices {
  ruta = "http://localhost:3000/mapas";
  constructor(private http: HttpClient) {}

  getMapaButaca(idFuncion: number) {
    return this.http.get(`${this.ruta}/${idFuncion}`);
  }
}
