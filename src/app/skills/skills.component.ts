import { SkillService } from './../services/skill.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skill = {};
  id;

  constructor(private skillService: SkillService,
    private route: ActivatedRoute,
    private router: Router) {
      this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) this.skillService.getSkillById(this.id).pipe(take(1)).subscribe(s => this.skill = s);
   }

  ngOnInit() {
  }

  save(skill)
  {
    if (this.id) this.skillService.UpdateSkill(this.id, skill).subscribe();
    else this.skillService.AddNewSkill(skill).subscribe();

    this.router.navigate(['/skills']);
  }

}
