import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LasklubbComponent } from './lasklubb.component';

describe('LasklubbComponent', () => {
  let component: LasklubbComponent;
  let fixture: ComponentFixture<LasklubbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LasklubbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LasklubbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
