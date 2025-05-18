import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPrincipalComponent } from './paginaprincipal.component';

describe('PaginaprincipalComponent', () => {
  let component: PaginaPrincipalComponent;
  let fixture: ComponentFixture<PaginaPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
