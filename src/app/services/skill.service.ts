import { Skill } from './../Interfaces/Skill';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private httPservice: HttpClient) { }

  getSkills() : Observable<Skill[]> {
    return this.httPservice.get<Skill[]>('http://localhost:52408/Skills');
  }
}
