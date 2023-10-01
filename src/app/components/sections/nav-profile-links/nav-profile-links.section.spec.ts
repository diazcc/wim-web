import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavProfileLinksSection } from './nav-profile-links.section';

describe('NavProfileLinksSection', () => {
  let component: NavProfileLinksSection;
  let fixture: ComponentFixture<NavProfileLinksSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavProfileLinksSection ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavProfileLinksSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
