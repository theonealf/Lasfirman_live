import { TestBed } from '@angular/core/testing';

import { QuestApiService } from './quest-api.service';

describe('QuestApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestApiService = TestBed.get(QuestApiService);
    expect(service).toBeTruthy();
  });
});
