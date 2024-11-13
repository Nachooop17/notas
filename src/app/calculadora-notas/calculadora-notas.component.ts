import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

import { CalculadoraNotasModule } from './calculadora-notas.component';

@NgModule({
  declarations: [CalculadoraNotasComponent],
  imports: [
    IonicModule,
    FormsModule, // Agregar FormsModule aquí
  ],
  exports: [CalculadoraNotasModule]
})
export class CalculadoraNotasModule {}

  notas = [
    { valor: 0, peso: 0 },
    { valor: 0, peso: 0 },
  ]; // Inicializa con dos notas

  notaMinima: number | null = null;

  agregarNota() {
    this.notas.push({ valor: 0, peso: 0 });
  }

  calcularNotas() {
    let sumaProductos = 0;
    let sumaPesos = 0;

    for (const nota of this.notas) {
      sumaProductos += nota.valor * (nota.peso / 100);
      sumaPesos += nota.peso / 100;
    }

    if (sumaPesos >= 1) {
      this.notaMinima = null; // No se puede calcular la nota mínima si los pesos suman 100%
    } else {
      this.notaMinima = (4 - sumaProductos) / (1 - sumaPesos);
    }
  }
}
