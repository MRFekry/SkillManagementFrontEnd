import { EmployeeSkillService } from './../../../services/employeeSkill/employee-skill.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmployeeSkillsScores } from '../../../Models/EmployeeSkillsScores';
import { EmployeeSkill } from '../../../Models/EmployeeSkill';

@Component({
  selector: 'app-employee-skill-delete-confirmation',
  templateUrl: './employee-skill-delete-confirmation.component.html',
  styleUrls: ['./employee-skill-delete-confirmation.component.css']
})
export class EmployeeSkillDeleteConfirmationComponent implements OnInit {

  employeeSkillObj = {} as EmployeeSkill;

  constructor(public thisDialogRef: MatDialogRef<EmployeeSkillDeleteConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private employeeSkillService: EmployeeSkillService) { }

  ngOnInit() {
    if(this.data){
      this.employeeSkillObj.Id = this.data.employeeSkill.EmployeeSkillId;
      this.employeeSkillObj.Employee_Id = this.data.employee.Id;
      this.employeeSkillObj.Skill_Id = this.data.employeeSkill.SkillId;
      this.employeeSkillObj.Score_Id = this.data.employeeSkill.ScoreId;
    }
  }

  onConfirmDeleting() {
    console.log(this.data);
    if(this.data){
      this.employeeSkillService.DeleteEmployeeSkill(this.employeeSkillObj);
    }
      
    this.thisDialogRef.close('Confirm');
  }

  onCloseDialog() {
    this.thisDialogRef.close('Cancel');
  }
}
