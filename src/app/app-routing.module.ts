import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "app/app.component";
import { SeattleComponent } from "app/seattle/seattle.component";
import { SanJoseComponent } from "app/san-jose/san-jose.component";
import { BurbankComponent } from "app/burbank/burbank.component";
import { DallasComponent } from "app/dallas/dallas.component";
import { DCComponent } from "app/dc/dc.component";
import { ChicagoComponent } from "app/chicago/chicago.component";
import { LandingComponent } from "app/landing/landing.component";

const routes: Routes = [
  { path: '', pathMatch: 'full',component: LandingComponent},
  { path: 'seattle', component: SeattleComponent},
  { path: 'sanjose', component: SanJoseComponent},
  { path: 'burbank', component: BurbankComponent},
  { path: 'dallas', component: DallasComponent},
  { path: 'dc', component: DCComponent},
  { path: 'chicago', component: ChicagoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
