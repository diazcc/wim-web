import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAdmOrganism } from './menu-adm.organism';

describe('MenuAdmOrganism', () => {
  let component: MenuAdmOrganism;
  let fixture: ComponentFixture<MenuAdmOrganism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuAdmOrganism ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuAdmOrganism);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
