import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class SalasService {
  ruta = "http://localhost:3000/salas";
  constructor(private http: HttpClient) {}

  getButacasByFuncion(idFuncion: number) {
    this.http.get(`${this.ruta}/asientos/${idFuncion}`);
  }
}
