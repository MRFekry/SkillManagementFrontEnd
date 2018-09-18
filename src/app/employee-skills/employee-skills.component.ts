import { EmployeeSkillService } from './../services/employee-skill.service';
import { ScoreService } from './../services/score.service';
import { asEnumerable } from 'linq-es2015';
import { Component, OnInit } from '@angular/core';
import { SkillService } from '../services/skill.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { EmployeeSkill } from '../Interfaces/EmployeeSkill';

@Component({
  selector: 'app-employee-skills',
  templateUrl: './employee-skills.component.html',
  styleUrls: ['./employee-skills.component.css']
})
export class EmployeeSkillsComponent implements OnInit {

  employeeId;
  employeeFirstName;
  employeeLastName;
  employeeEmail;
  id;
  employeeSkill = {};
  skills$;
  scores$;

  constructor(private skillService: SkillService,
    private ScoreService: ScoreService,
    private employeeSkillService: EmployeeSkillService,
    private route: ActivatedRoute,
    private router: Router) 
  {
    this.employeeId = this.route.snapshot.paramMap.get('employeeId');
    this.employeeFirstName = this.route.snapshot.paramMap.get('employeeFirstName');
    this.employeeLastName = this.route.snapshot.paramMap.get('employeeLastName');
    this.employeeEmail = this.route.snapshot.paramMap.get('employeeEmail');

    skillService.getSkills().subscribe(result => {
      this.skills$ = asEnumerable(result).Where(r => r.SkillParentCategory_Id != null);
    });

    ScoreService.getScores().subscribe(result => {
      this.scores$ = result;
    })

    this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) this.employeeSkillService.getEmployeeSkillById(this.id).pipe(take(1)).subscribe(es => this.employeeSkill = es);
  }

  ngOnInit() {
  }

  save(employeeSkill)
  {
    console.log(employeeSkill);

    let empskill = {} as EmployeeSkill;
    empskill.Employee_Id = this.employeeId;
    empskill.Skill_Id = employeeSkill.Skill_Id;
    empskill.Score_Id = employeeSkill.Score_Id;

    if (this.id) this.employeeSkillService.UpdateEmployeeSkill(this.id, empskill).subscribe();
    else this.employeeSkillService.AddNewEmployeeSkill(empskill).subscribe();

    this.router.navigate(['/']);
  }

}
