import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionWimeComponent } from './description.wime-component';

describe('DescriptionWimeComponent', () => {
  let component: DescriptionWimeComponent;
  let fixture: ComponentFixture<DescriptionWimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionWimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionWimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
