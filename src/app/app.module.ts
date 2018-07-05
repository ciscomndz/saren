import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BarraComponent } from './barra.component';
import { TramitesComponent } from './tramites/tramites.component';
import { NuevoComponent } from './tramites/nuevo.component';
import { EstadoComponent } from './tramites/estado.component';
import {Routes, RouterModule} from '@angular/router';
import { ReportesComponent } from './reportes/reportes.component';

const appRoutes: Routes=[
  {path:'', redirectTo:'/tramites',pathMatch:'full'},
  {path: 'nuevo',component:NuevoComponent},
  {path: 'estado',component:EstadoComponent},
  {path: 'tramites',component:TramitesComponent},
  {path: 'reportes',component:ReportesComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    TramitesComponent,
    NuevoComponent,
    EstadoComponent,
    ReportesComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
