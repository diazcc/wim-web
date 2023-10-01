import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WimesArticle } from './wimes.article';

describe('WimesArticle', () => {
  let component: WimesArticle;
  let fixture: ComponentFixture<WimesArticle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WimesArticle ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WimesArticle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
