import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculadoraNotasPage } from './calculadora-notas.page';

const routes: Routes = [
  {
    path: '',
    component: CalculadoraNotasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculadoraNotasPageRoutingModule {}
