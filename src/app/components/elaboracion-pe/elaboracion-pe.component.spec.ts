import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElaboracionPeComponent } from './elaboracion-pe.component';

describe('ElaboracionPeComponent', () => {
  let component: ElaboracionPeComponent;
  let fixture: ComponentFixture<ElaboracionPeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElaboracionPeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElaboracionPeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
