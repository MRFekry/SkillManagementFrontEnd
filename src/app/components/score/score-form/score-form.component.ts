import { Component, OnInit, Inject } from '@angular/core';
import { ScoreService } from '../../../services/score/score.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Score } from '../../../Models/Score';

@Component({
  selector: 'app-score-form',
  templateUrl: './score-form.component.html',
  styleUrls: ['./score-form.component.css']
})
export class ScoreFormComponent implements OnInit {

  ScoreName;
  grade;

  constructor(private scoreService: ScoreService,
    private route: ActivatedRoute,
    private router: Router,
    public dialogRef: MatDialogRef<ScoreFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Score) { }

  ngOnInit() {
    if(this.data){
       this.ScoreName = this.data.Name;
       this.grade = this.data.score;
    }
  }

  save(score)
  {
    if (this.data) this.scoreService.UpdateScore((this.data as Score).Id, score).subscribe();
    else this.scoreService.AddNewScore(score).subscribe();

    this.dialogRef.close();
  }

}
