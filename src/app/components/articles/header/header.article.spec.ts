import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderArticle } from './header.article';

describe('HeaderArticle', () => {
  let component: HeaderArticle;
  let fixture: ComponentFixture<HeaderArticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderArticle ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderArticle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
