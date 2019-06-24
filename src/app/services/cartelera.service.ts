import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class CarteleraService {
  ruta = "http://localhost:3000";
  constructor(private http: HttpClient) {}

  getPeliculas() {
    return this.http.get(`${this.ruta}/peliculas`);
  }
}
