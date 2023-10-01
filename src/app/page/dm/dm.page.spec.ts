import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmPage } from './dm.page';

describe('DmPage', () => {
  let component: DmPage;
  let fixture: ComponentFixture<DmPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
