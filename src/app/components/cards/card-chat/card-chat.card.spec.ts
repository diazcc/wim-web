import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardChatCard } from './card-chat.card';

describe('CardChatCard', () => {
  let component: CardChatCard;
  let fixture: ComponentFixture<CardChatCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardChatCard ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardChatCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
