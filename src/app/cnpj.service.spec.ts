import { TestBed } from '@angular/core/testing';

import { CnpjService } from './cnpj.service';

describe('TesteService', () => {
  let service: CnpjService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CnpjService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
