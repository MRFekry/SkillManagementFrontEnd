import { SkillsWithParentName } from './../../Models/SkillsWithParentName';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skill } from '../../Models/Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private readonly _baseUrl: string = 'http://localhost:52408/';

  constructor(private httPservice: HttpClient) { }

  getSkills() : Observable<SkillsWithParentName[]> {
    return this.httPservice.get<SkillsWithParentName[]>(this._baseUrl + "SkillsWithParentName");
  }

  getSkillById(id){
    return this.httPservice.get<Skill>(this._baseUrl + "skill/" + id);
  }

  AddNewSkill(skill: Skill){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.httPservice.post<Skill>(this._baseUrl + "skills", skill, { headers: this.AddHeader() });
  }

  UpdateSkill(id: number, skill: any){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    skill.id = id;
    return this.httPservice.put<Skill>(this._baseUrl + "skill/" + skill, skill, { headers: this.AddHeader() });
  }

  DeleteSkill(skill: any){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    this.httPservice.post<Skill>(this._baseUrl + "skill/" + skill, skill, { headers: this.AddHeader() }).subscribe();
  }

  getSkillParentCategories(){
    return this.httPservice.get<Skill[]>(this._baseUrl + "skillParentCategories");
  }

  AddHeader(){
    return new HttpHeaders().set('content-type', 'application/json');
  }
}
