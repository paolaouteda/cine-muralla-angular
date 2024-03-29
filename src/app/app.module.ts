import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { CinesComponent } from "./components/cines/cines.component";
import { AdministradorComponent } from "./components/administrador/administrador.component";
import { ComidaComponent } from "./components/comida/comida.component";
import { FuncionesComponent } from "./components/funciones/funciones.component";
import { ButacasComponent } from "./components/butacas/butacas.component";
import { DataService } from "./services/data.service";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { PeliculasComponent } from "./components/peliculas/peliculas.component";
import { SedesService } from "./services/sedes.service";
import { CarteleraService } from "./services/cartelera.service";
import { FuncionesService } from "./services/funciones.service";
import { MapaButacasServices } from "./services/mapas.services";
import { PeliculasService } from "./services/peliculas.services";
import { FormsModule } from '@angular/forms';
import { SalasService } from './services/salas.service';
import { CombosService } from "./services/combos.service";

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
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    DataService,
    SedesService,
    SalasService,
    PeliculasService,
    CarteleraService,
    FuncionesService,
    MapaButacasServices,
    CombosService,
    SalasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
