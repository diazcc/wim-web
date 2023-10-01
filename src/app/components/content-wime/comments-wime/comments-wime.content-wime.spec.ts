import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsWimeContentWime } from './comments-wime.content-wime';

describe('CommentsWimeContentWime', () => {
  let component: CommentsWimeContentWime;
  let fixture: ComponentFixture<CommentsWimeContentWime>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentsWimeContentWime ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsWimeContentWime);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
