import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewPostPreviewPostComponent } from './preview-post.preview-post-component';

describe('PreviewPostPreviewPostComponent', () => {
  let component: PreviewPostPreviewPostComponent;
  let fixture: ComponentFixture<PreviewPostPreviewPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewPostPreviewPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviewPostPreviewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
