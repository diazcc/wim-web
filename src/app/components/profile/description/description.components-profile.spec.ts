import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionComponentsProfile } from './description.components-profile';

describe('DescriptionComponentsProfile', () => {
  let component: DescriptionComponentsProfile;
  let fixture: ComponentFixture<DescriptionComponentsProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionComponentsProfile ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionComponentsProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
