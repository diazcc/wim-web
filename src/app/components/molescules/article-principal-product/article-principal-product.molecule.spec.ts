import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePrincipalProductMolecule } from './article-principal-product.molecule';

describe('ArticlePrincipalProductMolecule', () => {
  let component: ArticlePrincipalProductMolecule;
  let fixture: ComponentFixture<ArticlePrincipalProductMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlePrincipalProductMolecule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticlePrincipalProductMolecule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
