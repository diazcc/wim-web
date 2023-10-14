import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsCommentComponent } from './comments.comment-component';

describe('CommentsCommentComponent', () => {
  let component: CommentsCommentComponent;
  let fixture: ComponentFixture<CommentsCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsCommentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
