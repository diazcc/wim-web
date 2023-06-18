import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentationIndexOrganism } from './presentation-index.organism';

describe('PresentationIndexOrganism', () => {
  let component: PresentationIndexOrganism;
  let fixture: ComponentFixture<PresentationIndexOrganism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PresentationIndexOrganism ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresentationIndexOrganism);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
