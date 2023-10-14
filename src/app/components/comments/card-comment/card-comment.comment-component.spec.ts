import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCommentCommentComponent } from './card-comment.comment-component';

describe('CardCommentCommentComponent', () => {
  let component: CardCommentCommentComponent;
  let fixture: ComponentFixture<CardCommentCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCommentCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCommentCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
