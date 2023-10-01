import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexPresentationPage } from './login.page';

describe('IndexPresentationPage', () => {
  let component: IndexPresentationPage;
  let fixture: ComponentFixture<IndexPresentationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexPresentationPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndexPresentationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
