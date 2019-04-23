import { TestBed } from '@angular/core/testing';

import { ManagePlaylistService } from './manage-playlist.service';

describe('ManagePlaylistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagePlaylistService = TestBed.get(ManagePlaylistService);
    expect(service).toBeTruthy();
  });
});
