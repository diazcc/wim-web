import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSection } from './post.section';

describe('PostSection', () => {
  let component: PostSection;
  let fixture: ComponentFixture<PostSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostSection ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
