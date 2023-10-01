import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostUserPage } from './post-user.page';

describe('PostUserPage', () => {
  let component: PostUserPage;
  let fixture: ComponentFixture<PostUserPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostUserPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
