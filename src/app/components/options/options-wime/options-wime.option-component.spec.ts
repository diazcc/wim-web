import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsWimeOptionComponent } from './options-wime.option-component';

describe('OptionsWimeOptionComponent', () => {
  let component: OptionsWimeOptionComponent;
  let fixture: ComponentFixture<OptionsWimeOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OptionsWimeOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsWimeOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
