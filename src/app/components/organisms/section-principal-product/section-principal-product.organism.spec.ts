import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPrincipalProductOrganism } from './section-principal-product.organism';

describe('SectionPrincipalProductOrganism', () => {
  let component: SectionPrincipalProductOrganism;
  let fixture: ComponentFixture<SectionPrincipalProductOrganism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionPrincipalProductOrganism ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionPrincipalProductOrganism);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
