import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterOrganism } from './footer.organism';

describe('FooterOrganism', () => {
  let component: FooterOrganism;
  let fixture: ComponentFixture<FooterOrganism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterOrganism ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterOrganism);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
