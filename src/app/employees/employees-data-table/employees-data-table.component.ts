import { EmployeeSkillsScores } from './../../Interfaces/EmployeeSkillsScores';
import { EmployeeSkillService } from './../../services/employee-skill.service';
import { EmployeeSkill } from './../../Interfaces/EmployeeSkill';
import { EmployeeService } from './../../services/employee.service';
import {Component, OnInit, ViewChild, ChangeDetectorRef} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Employee } from '../../Interfaces/Employee';
import { ModalService } from '../../services/modal.service';
import { asEnumerable } from 'linq-es2015';
import { Router } from '@angular/router';

@Component({
  selector: 'employees-data-table',
  templateUrl: './employees-data-table.component.html',
  styleUrls: ['./employees-data-table.component.css']
})
export class EmployeesDataTableComponent implements OnInit {
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['FirstName', 'LastName', 'Email', 'Actions'];

  dataSource: MatTableDataSource<Employee>;
  employees: Employee[];
  dataSourceLength: number;
  employee = {};
  employeeSkills$: EmployeeSkillsScores[];
  skillCategories;
  employeeSkillId;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private employeeService: EmployeeService,
    private employeeSkillService: EmployeeSkillService,
    private changeDetectorRefs: ChangeDetectorRef,
    private modalService: ModalService,
    private router: Router) {  }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.employeeService.getEmployees().subscribe(result => {
      this.employees = result;
      this.dataSource = new MatTableDataSource(result);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSourceLength = this.dataSource.data.length;
      this.changeDetectorRefs.detectChanges();
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openModal(id: string, row: Employee) {
    if(row){
      let emp: Employee = {
        Id : row.Id,
        FirstName : row.FirstName,
        LastName : row.LastName,
        Email : row.Email,
        IsActive : row.IsActive,
      }
      this.employee = emp;
    }

    if((this.employee as Employee).Id){
      this.employeeSkillService.getEmployeeSkills((this.employee as Employee).Id).subscribe(result => {
        this.skillCategories = asEnumerable(result).Distinct(d => d.SkillCategoryName);
        this.employeeSkills$ = result;
        this.changeDetectorRefs.detectChanges();
      });
    }

    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  DeleteEmployee(employee, id: string){
    this.employeeService.DeleteEmployee(this.employee);

    this.closeModal(id);
  }

  getEmployeeSkillsPerCategory(skillCategoryName: string){
    if(this.employeeSkills$){
      return asEnumerable(this.employeeSkills$).Where(s => s.SkillCategoryName === skillCategoryName);
    }
  }

  removeSkill(id:number, modalToCloseId:string, modalToOpenId:string){
    this.closeModal(modalToCloseId);
    this.openModal(modalToOpenId, null);
    this.employeeSkillId = id;
    console.log(this.employeeSkillId);
  }

  DeleteEmployeeSkill(){
    let empSkill = asEnumerable(this.employeeSkills$).Where(s => s.EmployeeSkillId === this.employeeSkillId).FirstOrDefault();
    this.employeeSkillService.DeleteEmployeeSkill(this.employeeSkillId);

    this.router.navigate(['/']);
  }

  EditEmployeeSkill(Id,employeeId, employeeFirstName, employeeLastName, employeeEmail){
    this.router.navigate(['/employeeSkill', Id, employeeId, employeeFirstName, employeeLastName, employeeEmail]);
  }
}
