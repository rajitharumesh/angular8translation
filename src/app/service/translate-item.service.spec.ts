import { TestBed } from '@angular/core/testing';

import { TranslateItemService } from './translate-item.service';

describe('TranslateItemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TranslateItemService = TestBed.get(TranslateItemService);
    expect(service).toBeTruthy();
  });
});
