import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsWimesSectionSetting } from './options-wimes.section-setting';

describe('OptionsWimesSectionSetting', () => {
  let component: OptionsWimesSectionSetting;
  let fixture: ComponentFixture<OptionsWimesSectionSetting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsWimesSectionSetting ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsWimesSectionSetting);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
