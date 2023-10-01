import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileArticle } from './profile.article';

describe('ProfileArticle', () => {
  let component: ProfileArticle;
  let fixture: ComponentFixture<ProfileArticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileArticle ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileArticle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
