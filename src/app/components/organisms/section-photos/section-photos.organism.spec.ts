import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPhotosOrganism } from './section-photos.organism';

describe('SectionPhotosOrganism', () => {
  let component: SectionPhotosOrganism;
  let fixture: ComponentFixture<SectionPhotosOrganism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionPhotosOrganism ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionPhotosOrganism);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
