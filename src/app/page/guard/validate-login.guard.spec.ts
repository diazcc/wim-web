import { TestBed } from '@angular/core/testing';

import { ValidateLoginGuard } from './validate-login.guard';

describe('ValidateLoginGuard', () => {
  let guard: ValidateLoginGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ValidateLoginGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
