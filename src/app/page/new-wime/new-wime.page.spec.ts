import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWimePage } from './new-wime.page';

describe('NewWimePage', () => {
  let component: NewWimePage;
  let fixture: ComponentFixture<NewWimePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewWimePage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewWimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
