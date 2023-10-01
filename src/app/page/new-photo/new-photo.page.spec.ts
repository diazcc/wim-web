import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPhotoPage } from './new-photo.page';

describe('NewPhotoPage', () => {
  let component: NewPhotoPage;
  let fixture: ComponentFixture<NewPhotoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPhotoPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPhotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
