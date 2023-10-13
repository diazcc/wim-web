import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWimeComponent } from './header.wime-component';

describe('HeaderWimeComponent', () => {
  let component: HeaderWimeComponent;
  let fixture: ComponentFixture<HeaderWimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderWimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderWimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
