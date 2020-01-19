import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LijstComponent } from './lijst/lijst.component';
import { ToevoegenComponent } from './toevoegen/toevoegen.component';
import { ZoekenComponent } from './zoeken/zoeken.component';
import { VerwijderenComponent } from './verwijderen/verwijderen.component';
import { ProductsService } from './products.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LijstComponent,
    ToevoegenComponent,
    ZoekenComponent,
    VerwijderenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
