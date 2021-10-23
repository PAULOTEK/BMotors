import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPricipalComponent } from './pagina-pricipal.component';

describe('PaginaPricipalComponent', () => {
  let component: PaginaPricipalComponent;
  let fixture: ComponentFixture<PaginaPricipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaPricipalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaPricipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
