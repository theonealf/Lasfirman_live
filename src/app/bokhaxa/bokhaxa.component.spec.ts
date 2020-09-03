import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BokhaxaComponent } from './bokhaxa.component';

describe('BokhaxaComponent', () => {
  let component: BokhaxaComponent;
  let fixture: ComponentFixture<BokhaxaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BokhaxaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BokhaxaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
