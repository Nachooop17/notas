import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-resultado-nota',
  templateUrl: './resultado-nota.component.html',
  styleUrls: ['./resultado-nota.component.scss'],
})
export class ResultadoNotaComponent {
  @Input() notaMinima!: number;
  @Input() gifUrl!: string;

  constructor(private modalController: ModalController) {}

  cerrarModal() {
    this.modalController.dismiss();
  }
}
