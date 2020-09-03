import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndersidaComponent } from './undersida.component';

describe('UndersidaComponent', () => {
  let component: UndersidaComponent;
  let fixture: ComponentFixture<UndersidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndersidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndersidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
