import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCommentsSection } from './all-comments.section';

describe('AllCommentsSection', () => {
  let component: AllCommentsSection;
  let fixture: ComponentFixture<AllCommentsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCommentsSection ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCommentsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
