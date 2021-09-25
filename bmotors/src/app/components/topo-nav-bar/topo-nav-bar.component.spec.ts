import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopoNavBarComponent } from './topo-nav-bar.component';

describe('TopoNavBarComponent', () => {
  let component: TopoNavBarComponent;
  let fixture: ComponentFixture<TopoNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopoNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopoNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
