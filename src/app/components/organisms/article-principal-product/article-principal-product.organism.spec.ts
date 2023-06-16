import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePrincipalProductOrganism } from './article-principal-product.organism';

describe('ArticlePrincipalProductOrganism', () => {
  let component: ArticlePrincipalProductOrganism;
  let fixture: ComponentFixture<ArticlePrincipalProductOrganism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlePrincipalProductOrganism ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlePrincipalProductOrganism);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
