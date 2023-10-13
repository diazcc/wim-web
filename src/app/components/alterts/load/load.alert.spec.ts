import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadAlert } from './load.alert';

describe('LoadAlert', () => {
  let component: LoadAlert;
  let fixture: ComponentFixture<LoadAlert>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadAlert ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadAlert);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
