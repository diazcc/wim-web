import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminitrationPage } from './adminitration.page';

describe('AdminitrationPage', () => {
  let component: AdminitrationPage;
  let fixture: ComponentFixture<AdminitrationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminitrationPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminitrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
