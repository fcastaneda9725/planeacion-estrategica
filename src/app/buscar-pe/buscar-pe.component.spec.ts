import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarPeComponent } from './buscar-pe.component';

describe('BuscarPeComponent', () => {
  let component: BuscarPeComponent;
  let fixture: ComponentFixture<BuscarPeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarPeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarPeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
