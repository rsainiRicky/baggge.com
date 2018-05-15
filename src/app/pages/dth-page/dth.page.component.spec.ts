import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dth.PageComponent } from './dth.page.component';

describe('Dth.PageComponent', () => {
  let component: Dth.PageComponent;
  let fixture: ComponentFixture<Dth.PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dth.PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dth.PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
