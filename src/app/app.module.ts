import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Routes, RouterModule } from "@angular/router";
import {  HttpClientModule } from '@angular/common/http'; 
import { CinesComponent } from "./components/cines/cines.component";
import { AdministradorComponent } from "./components/administrador/administrador.component";
import { ComidaComponent } from "./components/comida/comida.component";
import { FuncionesComponent } from "./components/funciones/funciones.component";
import { ButacasComponent } from "./components/butacas/butacas.component";
import { DataService } from "./services/data.service";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { PeliculasComponent } from "./components/peliculas/peliculas.component";
import { ComidaService } from './services/comida.service';

const appRoutes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "cines", component: CinesComponent },
  { path: "administrador", component: AdministradorComponent },
  {
    path: "comida",
    component: ComidaComponent
  },
  {
    path: "funciones/:nombreFiscal",
    component: FuncionesComponent
  },
  { path: "butacas/:id", component: ButacasComponent },
  { path: "pelicula/:id", component: PeliculasComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CinesComponent,
    AdministradorComponent,
    ComidaComponent,
    FuncionesComponent,
    ButacasComponent,
    DashboardComponent,
    PeliculasComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [DataService, ComidaService],
  bootstrap: [AppComponent]
})
export class AppModule {}
