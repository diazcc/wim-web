import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOrganism } from './search.organism';

describe('SearchOrganism', () => {
  let component: SearchOrganism;
  let fixture: ComponentFixture<SearchOrganism>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchOrganism ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchOrganism);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
