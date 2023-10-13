import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareOptionComponent } from './share.option-component';

describe('ShareOptionComponent', () => {
  let component: ShareOptionComponent;
  let fixture: ComponentFixture<ShareOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
