import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForelasningComponent } from './forelasning.component';

describe('ForelasningComponent', () => {
  let component: ForelasningComponent;
  let fixture: ComponentFixture<ForelasningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForelasningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForelasningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
