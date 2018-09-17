import { TestBed, inject } from '@angular/core/testing';

import { EmployeeSkillService } from './employee-skill.service';

describe('EmployeeSkillService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeSkillService]
    });
  });

  it('should be created', inject([EmployeeSkillService], (service: EmployeeSkillService) => {
    expect(service).toBeTruthy();
  }));
});
