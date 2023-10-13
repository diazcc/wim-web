import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarNavbarComponent } from './navbar.navbar-component';

describe('NavbarNavbarComponent', () => {
  let component: NavbarNavbarComponent;
  let fixture: ComponentFixture<NavbarNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
