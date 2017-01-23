/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrudLocalstorageService } from './crud-localstorage.service';

describe('CrudLocalstorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrudLocalstorageService]
    });
  });

  it('should ...', inject([CrudLocalstorageService], (service: CrudLocalstorageService) => {
    expect(service).toBeTruthy();
  }));
});
