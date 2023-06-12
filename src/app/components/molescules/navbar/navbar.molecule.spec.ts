import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarMolecule } from './navbar.molecule';

describe('NavbarMolecule', () => {
  let component: NavbarMolecule;
  let fixture: ComponentFixture<NavbarMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarMolecule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarMolecule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
