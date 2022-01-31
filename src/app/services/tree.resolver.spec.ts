import { TestBed } from '@angular/core/testing';

import { TreeResolver } from './tree.resolver';

describe('TreeResolver', () => {
  let resolver: TreeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TreeResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
