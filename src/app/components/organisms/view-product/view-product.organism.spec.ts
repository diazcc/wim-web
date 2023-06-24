import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProductOrganism } from './view-product.organism';

describe('ViewProductOrganism', () => {
  let component: ViewProductOrganism;
  let fixture: ComponentFixture<ViewProductOrganism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProductOrganism ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProductOrganism);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
