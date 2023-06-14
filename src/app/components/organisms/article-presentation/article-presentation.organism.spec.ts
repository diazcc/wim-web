import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePresentationOrganism } from './article-presentation.organism';

describe('ArticlePresentationOrganism', () => {
  let component: ArticlePresentationOrganism;
  let fixture: ComponentFixture<ArticlePresentationOrganism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlePresentationOrganism ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlePresentationOrganism);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
