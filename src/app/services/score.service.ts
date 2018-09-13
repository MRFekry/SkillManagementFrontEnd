import { Score } from './../Interfaces/Score';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private httPservice: HttpClient) { }

  getScores() : Observable<Score[]> {
    // let result = this.httPservice.get('http://localhost:52408/Scores');
    // return result.subscribe((response) => response.);

    return this.httPservice.get<Score[]>('http://localhost:52408/Scores');
  }
}
