import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderOrganism } from './slider.organism';

describe('SliderOrganism', () => {
  let component: SliderOrganism;
  let fixture: ComponentFixture<SliderOrganism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderOrganism ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderOrganism);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
