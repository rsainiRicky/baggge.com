import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mobile.PageComponent } from './mobile.page.component';

describe('Mobile.PageComponent', () => {
  let component: Mobile.PageComponent;
  let fixture: ComponentFixture<Mobile.PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mobile.PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mobile.PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
