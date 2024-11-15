import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculadoraPromedioPage } from './calculadora-promedio.page';

describe('CalculadoraPromedioPage', () => {
  let component: CalculadoraPromedioPage;
  let fixture: ComponentFixture<CalculadoraPromedioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraPromedioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
