import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarsitioComponent } from './registrarsitio.component';

describe('RegistrarsitioComponent', () => {
  let component: RegistrarsitioComponent;
  let fixture: ComponentFixture<RegistrarsitioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarsitioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarsitioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
