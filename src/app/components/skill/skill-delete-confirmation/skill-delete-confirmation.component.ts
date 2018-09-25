import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Skill } from '../../../Models/Skill';
import { SkillService } from '../../../services/skill/skill.service';

@Component({
  selector: 'app-skill-delete-confirmation',
  templateUrl: './skill-delete-confirmation.component.html',
  styleUrls: ['./skill-delete-confirmation.component.css']
})
export class SkillDeleteConfirmationComponent implements OnInit {

  skill = {};

  constructor(public thisDialogRef: MatDialogRef<SkillDeleteConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Skill,
    private skillService: SkillService) { }

  ngOnInit() {
    if(this.data) this.skill = this.data;
  }

  onConfirmDeleting() {
    if(this.skill)
      this.skillService.DeleteSkill(this.skill);
    
    this.thisDialogRef.close();
  }

  onCloseDialog() {
    this.thisDialogRef.close();
  }

}
