import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-calculadora-promedio',
  templateUrl: './calculadora-promedio.page.html',
  styleUrls: ['./calculadora-promedio.page.scss'],
})
export class CalculadoraPromedioPage implements OnInit {
  notas = [
    { valor: '', peso: '' },
    { valor: '', peso: '' },
  ];

  promedio: number | null = null;
  errores = {
    notaInvalida: false,
    pesoInvalido: false,
    sumaPesosExcede: false
  };

  constructor(private alertController: AlertController) {}

  ngOnInit(): void {
    // Si no necesitas nada en este ciclo de vida, puedes dejarlo vacío
  }

  agregarNota() {
    this.notas.push({ valor: '', peso: '' });
  }

  validarNotas() {
    let sumaPesos = 0;
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
        sumaPesos += parseFloat(nota.peso) / 100;
      }
    }

    if (sumaPesos > 1) {
      this.errores.sumaPesosExcede = true;
    }

    return !this.errores.notaInvalida && !this.errores.pesoInvalido && !this.errores.sumaPesosExcede;
  }

  calcularPromedio() {
    if (!this.validarNotas()) {
      return;
    }

    let sumaProductos = 0;
    let sumaPesos = 0;

    for (const nota of this.notas) {
      sumaProductos += parseFloat(nota.valor) * (parseFloat(nota.peso) / 100);
      sumaPesos += parseFloat(nota.peso) / 100;
    }

    // Calcular el promedio ponderado
    this.promedio = sumaProductos;

    // Mostrar la alerta después de calcular el promedio
    this.presentAlert();
  }

  async presentAlert() {
    if (this.promedio === null) return;

    const alert = await this.alertController.create({
      header: 'Resultado',
      message: `El promedio ponderado es: ${this.promedio.toFixed(2)}`,
      buttons: ['OK'],
      cssClass: 'custom-alert'
    });

    await alert.present();
  }
}
