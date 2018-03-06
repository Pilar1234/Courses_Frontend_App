import { TestBed, inject } from '@angular/core/testing';

import { AddMemberService } from './add-member.service';

describe('AddMemberService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddMemberService]
    });
  });

  it('should be created', inject([AddMemberService], (service: AddMemberService) => {
    expect(service).toBeTruthy();
  }));
});
