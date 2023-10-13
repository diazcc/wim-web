import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksComponentsProfile } from './links.components-profile';

describe('LinksComponentsProfile', () => {
  let component: LinksComponentsProfile;
  let fixture: ComponentFixture<LinksComponentsProfile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinksComponentsProfile ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksComponentsProfile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
