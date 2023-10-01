import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostImageCard } from './post-image.card';

describe('PostImageCard', () => {
  let component: PostImageCard;
  let fixture: ComponentFixture<PostImageCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostImageCard ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostImageCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
