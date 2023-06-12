import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOrganism } from './header.organism';

describe('HeaderOrganism', () => {
  let component: HeaderOrganism;
  let fixture: ComponentFixture<HeaderOrganism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderOrganism ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderOrganism);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
