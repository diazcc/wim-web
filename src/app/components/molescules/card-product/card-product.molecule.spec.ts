import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProductMolecule } from './card-product.molecule';

describe('CardProductMolecule', () => {
  let component: CardProductMolecule;
  let fixture: ComponentFixture<CardProductMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProductMolecule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProductMolecule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
