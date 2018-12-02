import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarPeComponent } from './modificar-pe.component';

describe('ModificarPeComponent', () => {
  let component: ModificarPeComponent;
  let fixture: ComponentFixture<ModificarPeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModificarPeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarPeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
