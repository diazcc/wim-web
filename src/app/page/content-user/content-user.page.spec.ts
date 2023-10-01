import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentUserPage } from './content-user.page';

describe('ContentUserPage', () => {
  let component: ContentUserPage;
  let fixture: ComponentFixture<ContentUserPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentUserPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
