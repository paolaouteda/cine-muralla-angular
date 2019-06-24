import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ComidaService {
  constructor(private http: HttpClient) { }


  getComida (cineId: number){
    this.http.get(`localhost:3000/Sede`).subscribe((data) => console.log(data));
  }
}