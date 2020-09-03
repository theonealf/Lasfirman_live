import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmlasfirmanComponent } from './omlasfirman.component';

describe('OmlasfirmanComponent', () => {
  let component: OmlasfirmanComponent;
  let fixture: ComponentFixture<OmlasfirmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmlasfirmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmlasfirmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
