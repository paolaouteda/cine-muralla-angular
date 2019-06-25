import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CombosService {
  ruta = "http://localhost:3000/combos";
  constructor(private http: HttpClient) {}

  getCombos() {
    return this.http.get<any[]>(`${this.ruta}`);
  }
}
