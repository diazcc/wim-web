import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWimeContentWime } from './header-wime.content-wime';

describe('HeaderWimeContentWime', () => {
  let component: HeaderWimeContentWime;
  let fixture: ComponentFixture<HeaderWimeContentWime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderWimeContentWime ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderWimeContentWime);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
