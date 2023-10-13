import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertAlert } from './alert.alert';

describe('AlertAlert', () => {
  let component: AlertAlert;
  let fixture: ComponentFixture<AlertAlert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertAlert ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertAlert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
