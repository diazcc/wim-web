import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertMolecule } from './alert.molecule';

describe('AlertMolecule', () => {
  let component: AlertMolecule;
  let fixture: ComponentFixture<AlertMolecule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertMolecule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlertMolecule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
