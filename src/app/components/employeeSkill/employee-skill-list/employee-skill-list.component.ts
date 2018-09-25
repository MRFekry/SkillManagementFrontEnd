import { Component, OnInit, Inject } from '@angular/core';
import { EmployeeSkillsScores } from '../../../Models/EmployeeSkillsScores';
import { asEnumerable } from 'linq-es2015';
import { Router } from '@angular/router';
import { EmployeeSkillService } from '../../../services/employeeSkill/employee-skill.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { EmployeeFormComponent } from '../../employee/employee-form/employee-form.component';
import { Employee } from '../../../Models/Employee';
import { EmployeeSkillFormComponent } from '../employee-skill-form/employee-skill-form.component';
import { EmployeeSkill } from '../../../Models/EmployeeSkill';
import { EmployeeSkillDeleteConfirmationComponent } from '../employee-skill-delete-confirmation/employee-skill-delete-confirmation.component';

@Component({
  selector: 'app-employee-skill-list',
  templateUrl: './employee-skill-list.component.html',
  styleUrls: ['./employee-skill-list.component.css']
})
export class EmployeeSkillListComponent implements OnInit {

  employee = {};
  skillCategories;
  employeeSkills$: EmployeeSkillsScores[];
  employeeSkillId;

  constructor(private router: Router, 
    private employeeSkillService: EmployeeSkillService,
    public dialogRef: MatDialogRef<EmployeeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employee,
    public dialog: MatDialog) { }

  ngOnInit() {
    if(this.data){ 
      this.employee = this.data;
      this.employeeSkillService.getEmployeeSkills((this.employee as Employee).Id).subscribe(result => {
        this.skillCategories = asEnumerable(result).Distinct(d => d.SkillCategoryName);
        this.employeeSkills$ = result;
      });
    }
  }

  getEmployeeSkillsPerCategory(skillCategoryName: string){
    if(this.employeeSkills$){
      return asEnumerable(this.employeeSkills$).Where(s => s.SkillCategoryName === skillCategoryName);
    }
  }

  openEmployeeSkillFormDialog(employee: Employee, employeeSkill: EmployeeSkill){
    const dialogRef = this.dialog.open(EmployeeSkillFormComponent, {
      width: '60%',
      data: { employee, employeeSkill }
    });
  }

  openEmployeeSkillDeleteConfirmationDialog(employee: Employee, employeeSkill: EmployeeSkill){
    const dialogRef = this.dialog.open(EmployeeSkillDeleteConfirmationComponent, {
      width: '40%',
      data: { employee, employeeSkill }
    });
  }

}
