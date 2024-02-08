// import { Component } from '@angular/core';
// import { surveyQuestions } from 'src/model/SurveyQuestions';
// import { SurveyService } from '../survey.service';
// import { Observable } from 'rxjs/internal/Observable';

// @Component({
//   selector: 'app-surveyviewtable',
//   templateUrl: './surveyviewtable.component.html',
//   styleUrls: ['./surveyviewtable.component.css']
// })
// export class SurveyviewtableComponent {
// openUpdateForm(_t3: any) {
// throw new Error('Method not implemented.');
// }

//   surveyq : surveyQuestions;
//   result : string=" ";
//   surveytlist : surveyQuestions[] = [];


//   constructor(private service : SurveyService){
//     this.surveyq = new surveyQuestions;
//     this.getAllSurveyQuestion();
// }


// getAllSurveyQuestion(){
//   this.service.getAllSurveyQuestion().subscribe( surveyq=> this.surveytlist = surveyq);
// }


// deleteSurvey(surveyq: surveyQuestions) {
//   this.service.deleteSurvey(surveyq).subscribe(() => {
//     // Deletion successful, emit event to update the table
//     this.service.getSurveyDeletedEvent().emit();
//   });
// }

// private subscribeToSurveyDeletedEvent() {
//   this.service.getSurveyDeletedEvent().subscribe(() => {
//     // Update the table when a survey is deleted
//     this.getAllSurveyQuestion();
//   });
// }
// }