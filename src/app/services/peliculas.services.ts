import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class PeliculasService {
  ruta = "http://localhost:3000/peliculas";
  constructor(private http: HttpClient) {}

  getPeliculas() {
    return this.http.get(`${this.ruta}/all`);
  }

  getIdiomas() {
    return this.http.get(`${this.ruta}/idiomas`);
  }

  getSubtitulos() {
    return this.http.get(`${this.ruta}/subtitulos`);
  }
}
