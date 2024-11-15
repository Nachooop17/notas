import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'calculadora-notas',
    loadChildren: () => import('./calculadora-notas/calculadora-notas.module').then( m => m.CalculadoraNotasPageModule)
  },
  {
    path: 'calculadora-promedio',
    loadChildren: () => import('./calculadora-promedio/calculadora-promedio.module').then( m => m.CalculadoraPromedioPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), IonicModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
