import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculadoraNotasPageRoutingModule } from './calculadora-notas-routing.module';

import { CalculadoraNotasPage } from './calculadora-notas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculadoraNotasPageRoutingModule
  ],
  declarations: [CalculadoraNotasPage]
})
export class CalculadoraNotasPageModule {}
