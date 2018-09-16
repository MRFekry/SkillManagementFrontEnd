import { Employee } from "./Employee";
import { Skill } from "./Skill";
import { Score } from "./Score";

export interface EmployeeSkill
{
    Id: number;
    employee: Employee;
    skill: Skill;
    score: Score;  
}