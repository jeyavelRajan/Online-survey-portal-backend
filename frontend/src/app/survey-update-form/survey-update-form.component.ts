import { Component, EventEmitter, Input, Output } from '@angular/core';
import { surveyQuestions } from 'src/model/SurveyQuestions'; 
import { SurveyService } from '../survey.service'; 



@Component({
  selector: 'app-survey-update-form',
  templateUrl: './survey-update-form.component.html',
  styleUrls: ['./survey-update-form.component.css']
})
export class SurveyUpdateFormComponent {
  title='survey-update';
  @Input() selectedSurveyToUpdate: surveyQuestions = new surveyQuestions();
  @Output() updateEvent: EventEmitter<void> = new EventEmitter<void>();
  constructor(private surveyService: SurveyService) {     
  }
 

  updateSurvey(): void {
    this.surveyService.updateSurvey(this.selectedSurveyToUpdate).subscribe(
      () => {
        console.log('Survey updated successfully!');
        this.updateEvent.emit();
      },
      error => {
        console.error('Error updating survey:', error);
      }
    );
  }
   



}