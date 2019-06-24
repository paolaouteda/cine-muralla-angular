import { Component, OnInit, Input } from '@angular/core';
import { SedesService } from 'src/app/services/sedes.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  // Permitir Collapse
  public sedeIsCollapsed = true;
  public salaIsCollapsed = true;
  public mapaIsCollapsed = true;
  public funcionesIsCollapsed = true;

  ubicaciones;
  
  @Input()
  ubicacion;
  @Input()
  nombre;
  @Input()
  horaInicio;
  @Input()
  horaFin;
 

  constructor(private sedesService: SedesService) { }

  ngOnInit() {
    this.sedesService.getUbicaciones().subscribe(data => console.log(data));
  }

}
