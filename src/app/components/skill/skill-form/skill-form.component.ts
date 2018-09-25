import { Component, OnInit, Inject } from '@angular/core';
import { SkillService } from '../../../services/skill/skill.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Skill } from '../../../Models/Skill';

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.css']
})
export class SkillFormComponent implements OnInit {

  skill = {};
  skillParentCategories;

  constructor(private skillService: SkillService,
    public dialogRef: MatDialogRef<SkillFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Skill) {
      
      skillService.getSkillParentCategories().subscribe(s => {
        this.skillParentCategories = s;
      });
   }

  ngOnInit() {
    if(this.data) this.skill = this.data;
  }

  save(skill)
  {
    if (this.data) this.skillService.UpdateSkill((this.skill as Skill).Id, skill).subscribe();
    else this.skillService.AddNewSkill(skill).subscribe();

    this.dialogRef.close();
  }

}
