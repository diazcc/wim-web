import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePersonalPage } from './profile-personal.page';

describe('ProfilePersonalPage', () => {
  let component: ProfilePersonalPage;
  let fixture: ComponentFixture<ProfilePersonalPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilePersonalPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilePersonalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
