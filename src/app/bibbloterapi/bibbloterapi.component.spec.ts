import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BibbloterapiComponent } from './bibbloterapi.component';

describe('BibbloterapiComponent', () => {
  let component: BibbloterapiComponent;
  let fixture: ComponentFixture<BibbloterapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BibbloterapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BibbloterapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
