import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WimeWimeComponent } from './wime.wime-component';

describe('WimeWimeComponent', () => {
  let component: WimeWimeComponent;
  let fixture: ComponentFixture<WimeWimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WimeWimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WimeWimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
