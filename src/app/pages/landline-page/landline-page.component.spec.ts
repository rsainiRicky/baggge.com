import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlinePageComponent } from './landline-page.component';

describe('LandlinePageComponent', () => {
  let component: LandlinePageComponent;
  let fixture: ComponentFixture<LandlinePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandlinePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandlinePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
