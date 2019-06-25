import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class FuncionesService {
  ruta = "http://localhost:3000/funciones";
  constructor(private http: HttpClient) {}

  getFuncionesByPelicula(idPelicula: number) {
    return this.http.get(`${this.ruta}/pelicula/${idPelicula}`);
  }

  comprar(data) {
    return this.http.post(`${this.ruta}/comprar`, data);
  }
}
