import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Routes, RouterModule } from "@angular/router";
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
    NgbModule
  ],
  providers: [DataService, SedesService, CarteleraService, FuncionesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
