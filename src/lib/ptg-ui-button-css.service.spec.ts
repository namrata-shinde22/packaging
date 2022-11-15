import { TestBed } from '@angular/core/testing';

import { PtgUiButtonCssService } from './ptg-ui-button-css.service';

describe('PtgUiButtonCssService', () => {
  let service: PtgUiButtonCssService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PtgUiButtonCssService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
