import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { Routes, RouterModule } from "@angular/router";
import { CinesComponent } from "./components/cines/cines.component";
import { AdministradorComponent } from "./components/administrador/administrador.component";
import { ComidaComponent } from "./components/comida/comida.component";
import { CarteleraComponent } from "./components/cartelera/cartelera.component";
import { ButacasComponent } from "./components/butacas/butacas.component";
import { DataService } from "./services/dataService";

const appRoutes: Routes = [
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
  { path: "butacas/:id", component: ButacasComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CinesComponent,
    AdministradorComponent,
    ComidaComponent,
    CarteleraComponent,
    ButacasComponent
  ],
  imports: [RouterModule.forRoot(appRoutes), BrowserModule, AppRoutingModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
