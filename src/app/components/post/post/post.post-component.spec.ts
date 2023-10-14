import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPostComponent } from './post.post-component';

describe('PostPostComponent', () => {
  let component: PostPostComponent;
  let fixture: ComponentFixture<PostPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
