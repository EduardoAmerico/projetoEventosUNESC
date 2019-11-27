import { EventosListaComponent } from './eventos-lista/eventos-lista.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventosFormComponent } from './eventos-form/eventos-form.component';

const routes: Routes = [
  { path: '', component: EventosListaComponent},
  { path: 'novo', component: EventosFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }
