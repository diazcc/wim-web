import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserDescriptionPage } from './new-user-description.page';

describe('NewUserDescriptionPage', () => {
  let component: NewUserDescriptionPage;
  let fixture: ComponentFixture<NewUserDescriptionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewUserDescriptionPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewUserDescriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
