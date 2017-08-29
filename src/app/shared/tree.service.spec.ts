import { TestBed, inject } from '@angular/core/testing';

import { TreeServiceService } from './tree-service.service';

describe('TreeServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TreeServiceService]
    });
  });

  it('should be created', inject([TreeServiceService], (service: TreeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
