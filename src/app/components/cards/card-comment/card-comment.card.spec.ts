import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCommentCard } from './card-comment.card';

describe('CardCommentCard', () => {
  let component: CardCommentCard;
  let fixture: ComponentFixture<CardCommentCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCommentCard ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCommentCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
