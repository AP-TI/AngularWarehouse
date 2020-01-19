import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LijstComponent } from './lijst/lijst.component';
import { ZoekenComponent } from './zoeken/zoeken.component';
import { VerwijderenComponent } from './verwijderen/verwijderen.component';
import { ToevoegenComponent } from './toevoegen/toevoegen.component'


const routes: Routes = [
  { path: 'lijst', component: LijstComponent },
  { path: 'zoeken', component: ZoekenComponent },
  { path: 'verwijderen', component: VerwijderenComponent },
  { path: 'toevoegen', component: ToevoegenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
