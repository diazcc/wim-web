import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPostOptionNavbarComponent } from './new-post-option.navbar-component';

describe('NewPostOptionNavbarComponent', () => {
  let component: NewPostOptionNavbarComponent;
  let fixture: ComponentFixture<NewPostOptionNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPostOptionNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPostOptionNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
