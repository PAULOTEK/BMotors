import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MaterialModule } from './components/material/material.module';
import { TopoNavBarComponent } from './components/topo-nav-bar/topo-nav-bar.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { PaginaPricipalComponent } from './pages/pagina-pricipal/pagina-pricipal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TopoNavBarComponent,
    RodapeComponent,
    PaginaPricipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MaterialModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
