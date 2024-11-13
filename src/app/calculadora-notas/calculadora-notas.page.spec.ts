import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculadoraNotasPage } from './calculadora-notas.page';

describe('CalculadoraNotasPage', () => {
  let component: CalculadoraNotasPage;
  let fixture: ComponentFixture<CalculadoraNotasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraNotasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
