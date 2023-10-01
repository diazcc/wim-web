import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentInformationProfileSection } from './content-information-profile.section';

describe('ContentInformationProfileSection', () => {
  let component: ContentInformationProfileSection;
  let fixture: ComponentFixture<ContentInformationProfileSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentInformationProfileSection ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentInformationProfileSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
