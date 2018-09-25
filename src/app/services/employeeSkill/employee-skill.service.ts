import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmployeeSkillsScores } from '../../Models/EmployeeSkillsScores';
import { EmployeeSkill } from '../../Models/EmployeeSkill';

@Injectable({
  providedIn: 'root'
})
export class EmployeeSkillService {

  private readonly _baseUrl: string = 'http://localhost:52408/';

  constructor(private httPservice: HttpClient) { }

  getEmployeeSkills(employeeSkillId) : Observable<EmployeeSkillsScores[]> {
    return this.httPservice.get<EmployeeSkillsScores[]>(this._baseUrl + "employee/skills/" + employeeSkillId);
  }

  getEmployeeSkillById(id){
    return this.httPservice.get<EmployeeSkill>(this._baseUrl + "employee/skill/" + id);
  }

  AddNewEmployeeSkill(employeeSkill: EmployeeSkill){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.httPservice.post<EmployeeSkill>(this._baseUrl + "employee/skill/new", employeeSkill, {headers});
  }

  UpdateEmployeeSkill(id: number, employeeSkill: any){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    employeeSkill.id = id;
    return this.httPservice.put<EmployeeSkill>(this._baseUrl + "employee/skill/" + employeeSkill, employeeSkill, {headers});
  }

  DeleteEmployeeSkill(employeeSkill: any){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    this.httPservice.post<EmployeeSkill>(this._baseUrl + "employee/skill/delete/" + employeeSkill, employeeSkill, {headers}).subscribe();
  }
}
