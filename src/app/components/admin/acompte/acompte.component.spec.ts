import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompteComponent } from './acompte.component';

describe('AcompteComponent', () => {
  let component: AcompteComponent;
  let fixture: ComponentFixture<AcompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
