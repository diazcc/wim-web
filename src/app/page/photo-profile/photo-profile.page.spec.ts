import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoProfilePage } from './photo-profile.page';

describe('PhotoProfilePage', () => {
  let component: PhotoProfilePage;
  let fixture: ComponentFixture<PhotoProfilePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoProfilePage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
