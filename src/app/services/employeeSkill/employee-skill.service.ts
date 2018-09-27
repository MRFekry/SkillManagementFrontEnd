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
    return this.httPservice.post<EmployeeSkill>(this._baseUrl + "employee/skill/new", employeeSkill, { headers: this.AddHeader() });
  }

  UpdateEmployeeSkill(id: number, employeeSkill: any){
    employeeSkill.id = id;
    return this.httPservice.put<EmployeeSkill>(this._baseUrl + "employee/skill/" + employeeSkill, employeeSkill, { headers: this.AddHeader() });
  }

  DeleteEmployeeSkill(employeeSkill: any){
    this.httPservice.post<EmployeeSkill>(this._baseUrl + "employee/skill/delete/" + employeeSkill, employeeSkill, { headers: this.AddHeader() }).subscribe();
  }

  AddHeader(){
    return new HttpHeaders().set('content-type', 'application/json');
  }
}
