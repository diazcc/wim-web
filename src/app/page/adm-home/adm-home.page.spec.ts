import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmHomePage } from './adm-home.page';

describe('AdmHomePage', () => {
  let component: AdmHomePage;
  let fixture: ComponentFixture<AdmHomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmHomePage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
