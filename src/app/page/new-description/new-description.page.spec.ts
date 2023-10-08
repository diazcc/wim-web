import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDescriptionPage } from './new-description.page';

describe('NewDescriptionPage', () => {
  let component: NewDescriptionPage;
  let fixture: ComponentFixture<NewDescriptionPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDescriptionPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDescriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
