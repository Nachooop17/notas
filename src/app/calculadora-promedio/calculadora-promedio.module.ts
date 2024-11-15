import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculadoraPromedioPageRoutingModule } from './calculadora-promedio-routing.module';

import { CalculadoraPromedioPage } from './calculadora-promedio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculadoraPromedioPageRoutingModule
  ],
  declarations: [CalculadoraPromedioPage]
})
export class CalculadoraPromedioPageModule {}
