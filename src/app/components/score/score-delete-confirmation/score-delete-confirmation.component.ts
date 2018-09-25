import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Score } from '../../../Models/Score';
import { ScoreService } from '../../../services/score/score.service';

@Component({
  selector: 'app-score-delete-confirmation',
  templateUrl: './score-delete-confirmation.component.html',
  styleUrls: ['./score-delete-confirmation.component.css']
})
export class ScoreDeleteConfirmationComponent implements OnInit {

  score = {};

  constructor(public thisDialogRef: MatDialogRef<ScoreDeleteConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Score,
    private scoreService: ScoreService) { }

  ngOnInit() {
    if(this.data) this.score = this.data;
  }

  onConfirmDeleting() {
    if(this.score)
      this.scoreService.DeleteScore(this.score);
    
    this.thisDialogRef.close();
  }

  onCloseDialog() {
    this.thisDialogRef.close();
  }

}
