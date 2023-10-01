import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostOptionArticle } from './new-post-option.article';

describe('NewPostOptionArticle', () => {
  let component: NewPostOptionArticle;
  let fixture: ComponentFixture<NewPostOptionArticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPostOptionArticle ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPostOptionArticle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
