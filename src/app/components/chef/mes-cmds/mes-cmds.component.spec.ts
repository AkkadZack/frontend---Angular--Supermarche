import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesCmdsComponent } from './mes-cmds.component';

describe('MesCmdsComponent', () => {
  let component: MesCmdsComponent;
  let fixture: ComponentFixture<MesCmdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesCmdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesCmdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
