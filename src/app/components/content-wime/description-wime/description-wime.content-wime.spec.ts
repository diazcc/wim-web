import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionWimeContentWime } from './description-wime.content-wime';

describe('DescriptionWimeContentWime', () => {
  let component: DescriptionWimeContentWime;
  let fixture: ComponentFixture<DescriptionWimeContentWime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionWimeContentWime ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionWimeContentWime);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
