import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationTemplate } from './administration.template';

describe('AdministrationTemplate', () => {
  let component: AdministrationTemplate;
  let fixture: ComponentFixture<AdministrationTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministrationTemplate ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrationTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
