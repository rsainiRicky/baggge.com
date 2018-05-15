import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Electricity.PageComponent } from './electricity.page.component';

describe('Electricity.PageComponent', () => {
  let component: Electricity.PageComponent;
  let fixture: ComponentFixture<Electricity.PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Electricity.PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Electricity.PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
