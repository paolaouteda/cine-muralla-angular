import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Routes, RouterModule } from "@angular/router";
import { CinesComponent } from "./components/cines/cines.component";
import { AdministradorComponent } from "./components/administrador/administrador.component";
import { ComidaComponent } from "./components/comida/comida.component";
import { CarteleraComponent } from "./components/cartelera/cartelera.component";
import { ButacasComponent } from "./components/butacas/butacas.component";
import { DataService } from "./services/dataService";
import { DashboardComponent } from "./dashboard/dashboard.component";

const appRoutes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "cines", component: CinesComponent },
  { path: "administrador", component: AdministradorComponent },
  {
    path: "comida",
    component: ComidaComponent
  },
  {
    path: "cartelera/:nombreFiscal",
    component: CarteleraComponent
  },
  { path: "butacas/:id", component: ButacasComponent },
  { path: "peliculas/:id", component: CarteleraComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CinesComponent,
    AdministradorComponent,
    ComidaComponent,
    CarteleraComponent,
    ButacasComponent,
    DashboardComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
