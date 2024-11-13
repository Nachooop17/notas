import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ResultadoNotaComponent } from '../resultado-nota/resultado-nota.component';

@Component({
  selector: 'app-calculadora-notas',
  templateUrl: './calculadora-notas.page.html',
  styleUrls: ['./calculadora-notas.page.scss'],
})
export class CalculadoraNotasPage {
  notas = [
    { valor: '', peso: '' },
    { valor: '', peso: '' },
  ];

  notaMinima: number | null = null;
  errores = {
    notaInvalida: false,
    pesoInvalido: false,
    sumaPesosExcede: false
  };

  constructor(private modalController: ModalController) {} // Inyecta AlertController en el constructor

  agregarNota() {
    this.notas.push({ valor: '', peso: '' });
  }

  validarNotas() {
    let sumaPesos = 0;
    let sumaProductos = 0;
    this.errores.notaInvalida = false;
    this.errores.pesoInvalido = false;
    this.errores.sumaPesosExcede = false;

    for (const nota of this.notas) {
      if (nota.valor !== '' && (parseFloat(nota.valor) < 1 || parseFloat(nota.valor) > 7)) {
        this.errores.notaInvalida = true;
      }

      if (nota.peso !== '' && (parseFloat(nota.peso) <= 0 || parseFloat(nota.peso) > 100)) {
        this.errores.pesoInvalido = true;
      }

      if (nota.valor && nota.peso) {
        sumaProductos += parseFloat(nota.valor) * (parseFloat(nota.peso) / 100);
        sumaPesos += parseFloat(nota.peso) / 100;
      }
    }

    if (sumaPesos >= 1) {
      this.errores.sumaPesosExcede = true;
    }

    return !this.errores.notaInvalida && !this.errores.pesoInvalido && !this.errores.sumaPesosExcede;
  }

  calcularNotas() {
    if (!this.validarNotas()) {
      return;
    }

    let sumaProductos = 0;
    let sumaPesos = 0;

    for (const nota of this.notas) {
      sumaProductos += parseFloat(nota.valor) * (parseFloat(nota.peso) / 100);
      sumaPesos += parseFloat(nota.peso) / 100;
    }

    if (sumaPesos >= 1) {
      this.notaMinima = null;
    } else {
      this.notaMinima = (4 - sumaProductos) / (1 - sumaPesos);
    }

    // Mostrar la alerta después de calcular la nota
    this.presentModal();
  }

  async presentModal() {
    if (this.notaMinima === null) return;
  
    const gifUrl = this.notaMinima >= 4
      ? 'assets/images/success-gif.gif'
      : 'assets/images/fail-gif.gif';
  
    const modal = await this.modalController.create({
      component: ResultadoNotaComponent,
      componentProps: {
        notaMinima: this.notaMinima,
        gifUrl: gifUrl
      },
      cssClass: 'custom-modal-alert',  // Aplica la clase personalizada
      backdropDismiss: true,  // Permite cerrar el modal tocando fuera de él
      animated: true  // Asegura animaciones suaves
    });
  
    await modal.present();
  }
  
  
}