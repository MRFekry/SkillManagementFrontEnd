import { EmployeeSkillsScores } from './../../../Models/EmployeeSkillsScores';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { SkillService } from '../../../services/skill/skill.service';
import { ScoreService } from '../../../services/score/score.service';
import { EmployeeSkillService } from '../../../services/employeeSkill/employee-skill.service';
import { ActivatedRoute, Router } from '@angular/router';
import { asEnumerable } from 'linq-es2015';
import { EmployeeSkill } from '../../../Models/EmployeeSkill';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Employee } from '../../../Models/Employee';
import { EmployeeSkillListComponent } from '../employee-skill-list/employee-skill-list.component';

@Component({
  selector: 'app-employee-skill-form',
  templateUrl: './employee-skill-form.component.html',
  styleUrls: ['./employee-skill-form.component.css']
})
export class EmployeeSkillFormComponent implements OnInit {

  employee = {};
  employeeSkill = {};
  skills$;
  scores$;

  constructor(private skillService: SkillService,
    private ScoreService: ScoreService,
    private employeeSkillService: EmployeeSkillService,
    private route: ActivatedRoute,
    private router: Router,
    public dialogRef: MatDialogRef<EmployeeSkillFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) 
  {
    skillService.getSkills().subscribe(result => {
      this.skills$ = asEnumerable(result).Where(r => r.SkillParentCategory_Id != null);
    });

    ScoreService.getScores().subscribe(result => {
      this.scores$ = result;
    })
  }

  ngOnInit() {
    if(this.data){
      this.employee = this.data.employee;
      if(this.data.employeeSkill){
        this.employeeSkill = this.data.employeeSkill;
      }
    }
  }

  save(empSkill)
  {
    if (this.data.employeeSkill) this.employeeSkillService.UpdateEmployeeSkill((this.employeeSkill as EmployeeSkillsScores).EmployeeSkillId, empSkill).subscribe();
    else this.employeeSkillService.AddNewEmployeeSkill(empSkill).subscribe();

    this.dialogRef.close();
  }

}