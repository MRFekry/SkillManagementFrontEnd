import { Skill } from './../Interfaces/Skill';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private readonly _baseUrl: string = 'http://localhost:52408/';

  constructor(private httPservice: HttpClient) { }

  getSkills() : Observable<Skill[]> {
    return this.httPservice.get<Skill[]>(this._baseUrl + "skills");
  }

  getSkillById(id){
    return this.httPservice.get<Skill>(this._baseUrl + "skill/" + id);
  }

  AddNewSkill(skill: Skill){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.httPservice.post<Skill>(this._baseUrl + "skills", skill, {headers});
  }

  UpdateSkill(id: number, skill: any){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    skill.id = id;
    return this.httPservice.put<Skill>(this._baseUrl + "skill/" + skill, skill, {headers});
  }

  DeleteSkill(skill: any){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    this.httPservice.post<Skill>(this._baseUrl + "skill/" + skill, skill, {headers}).subscribe();
  }

  getSkillParentCategories(){
    return this.httPservice.get<Skill[]>(this._baseUrl + "skillParentCategories");
  }
}
