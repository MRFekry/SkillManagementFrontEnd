import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Score } from '../../Models/Score';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  private readonly _baseUrl: string = 'http://localhost:52408/';

  constructor(private httPservice: HttpClient) { }

  getScores() : Observable<Score[]> {
    return this.httPservice.get<Score[]>(this._baseUrl + "scores");
  }

  getScoreById(id){
    return this.httPservice.get<Score>(this._baseUrl + "score/" + id);
  }

  AddNewScore(score: Score){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    return this.httPservice.post<Score>(this._baseUrl + "scores", score, { headers: this.AddHeader() });
  }

  UpdateScore(id: number, score: any){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    score.id = id;
    return this.httPservice.put<Score>(this._baseUrl + "score/" + score, score, { headers: this.AddHeader() });
  }

  DeleteScore(score: any){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    this.httPservice.post<Score>(this._baseUrl + "score/" + score, score, { headers: this.AddHeader() }).subscribe();
  }

  AddHeader(){
    return new HttpHeaders().set('content-type', 'application/json');
  }
}
