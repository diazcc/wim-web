import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleryTemplate } from './galery.template';

describe('GaleryTemplate', () => {
  let component: GaleryTemplate;
  let fixture: ComponentFixture<GaleryTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleryTemplate ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleryTemplate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
