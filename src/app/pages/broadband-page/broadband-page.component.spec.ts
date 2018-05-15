import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadbandPageComponent } from './broadband-page.component';

describe('BroadbandPageComponent', () => {
  let component: BroadbandPageComponent;
  let fixture: ComponentFixture<BroadbandPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroadbandPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BroadbandPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
