import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponentsProfile } from './profile.components-profile';

describe('ProfileComponentsProfile', () => {
  let component: ProfileComponentsProfile;
  let fixture: ComponentFixture<ProfileComponentsProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileComponentsProfile ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileComponentsProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
