import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Datacard.PageComponent } from './datacard.page.component';

describe('Datacard.PageComponent', () => {
  let component: Datacard.PageComponent;
  let fixture: ComponentFixture<Datacard.PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Datacard.PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Datacard.PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
