import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class SalasService {
  ruta = "http://localhost:3000/salas";
  constructor(private http: HttpClient) {}

  getButacasByFuncion(idFuncion: number) {
    this.http.get(`${this.ruta}/asientos/${idFuncion}`);
  }

  guardarSala(sala){
    return this.http.post(`${this.ruta}/crear`, sala)
  }

  getTipoRepro(){
    return this.http.get(`${this.ruta}/tipoRepro`)
  }

  getTipoSala(){
    return this.http.get(`${this.ruta}/tipoSala`)
  }

  getIdSala(nombreSala){
    return this.http.get(`${this.ruta}/sede/${nombreSala}`)
  }
}
