import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GasPageComponent } from './gas-page.component';

describe('GasPageComponent', () => {
  let component: GasPageComponent;
  let fixture: ComponentFixture<GasPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GasPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
