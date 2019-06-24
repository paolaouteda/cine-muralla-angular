import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class SedesService {
  ruta = "http://localhost:3000/sedes";
  constructor(private http: HttpClient) {}

  getSedes() {
    return this.http.get(this.ruta);
  }

  getUbicaciones(){
    return this.http.get(`${this.ruta}/ubicaciones`);
  }

  getFuncionesBySede(nombreFiscal: number){
    return this.http.get(`${this.ruta}/${nombreFiscal}/funciones`);
  }
}
