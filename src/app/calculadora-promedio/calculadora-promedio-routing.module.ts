import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculadoraPromedioPage } from './calculadora-promedio.page';

const routes: Routes = [
  {
    path: '',
    component: CalculadoraPromedioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculadoraPromedioPageRoutingModule {}
