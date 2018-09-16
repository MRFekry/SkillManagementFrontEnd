import { Component, OnInit } from '@angular/core';
import { ScoreService } from '../services/score.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {

  score = {};
  id;

  constructor(private scoreService: ScoreService,
    private route: ActivatedRoute,
    private router: Router) {
      this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) this.scoreService.getScoreById(this.id).pipe(take(1)).subscribe(s => {
        this.score = s;
        console.log(this.score);
      });
   }

  ngOnInit() {
  }

  save(score)
  {
    if (this.id) this.scoreService.UpdateScore(this.id, score).subscribe();
    else this.scoreService.AddNewScore(score).subscribe();

    this.router.navigate(['/scores']);
  }

}
