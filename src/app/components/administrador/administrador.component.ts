import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
