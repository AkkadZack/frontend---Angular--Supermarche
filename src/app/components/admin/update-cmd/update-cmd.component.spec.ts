import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCmdComponent } from './update-cmd.component';

describe('UpdateCmdComponent', () => {
  let component: UpdateCmdComponent;
  let fixture: ComponentFixture<UpdateCmdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCmdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
