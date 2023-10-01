import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDmCard } from './icon-dm.card';

describe('IconDmCard', () => {
  let component: IconDmCard;
  let fixture: ComponentFixture<IconDmCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconDmCard ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconDmCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
