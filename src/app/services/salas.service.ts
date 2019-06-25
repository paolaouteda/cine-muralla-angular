import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class SalasService {
  ruta = "http://localhost:3000/salas";
  constructor(private http: HttpClient) {}

  getButacasByFuncion(idFuncion: number) {
    return this.http.get<any[]>(`${this.ruta}/asientos/${idFuncion}`);
  }

  reservar(butaca) {
    return this.http.put(`${this.ruta}/reservar/${butaca.idFuncion}`, butaca);
  }
}
