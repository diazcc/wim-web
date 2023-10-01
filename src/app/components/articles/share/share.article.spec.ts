import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareArticle } from './share.article';

describe('ShareArticle', () => {
  let component: ShareArticle;
  let fixture: ComponentFixture<ShareArticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareArticle ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareArticle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
