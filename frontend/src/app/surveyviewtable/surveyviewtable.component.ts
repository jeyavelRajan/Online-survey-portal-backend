// import { Component } from '@angular/core';
// import { surveyQuestions } from 'src/model/SurveyQuestions';
// import { SurveyService } from '../survey.service';

// @Component({
//   selector: 'app-surveyviewtable',
//   templateUrl: './surveyviewtable.component.html',
//   styleUrls: ['./surveyviewtable.component.css']
// })
// export class SurveyviewtableComponent {
//   surveyq: surveyQuestions;
//   result: string = '';
//   surveytlist: surveyQuestions[] = [];
//   selectedSurveyToUpdate: surveyQuestions | undefined; 

//   constructor(private service: SurveyService) {
//     this.surveyq = new surveyQuestions();
//     this.getAllSurveyQuestion();
//   }

//   getAllSurveyQuestion() {
//     this.service.getAllSurveyQuestion().subscribe(surveyq => (this.surveytlist = surveyq));
//   }

//   deleteSurvey(surveyq: surveyQuestions) {
//     this.service.deleteSurvey(surveyq).subscribe(() => {
    
//       this.service.getSurveyDeletedEvent().emit();
//     });
//   }


//   editSurvey(surveyq: surveyQuestions): void {
//      this.selectedSurveyToUpdate = { ...surveyq };
//   }
 

//   openUpdateForm(surveyq: surveyQuestions) {
    
//     this.selectedSurveyToUpdate = { ...surveyq }; 
//   }
// }


import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { surveyQuestions } from 'src/model/SurveyQuestions'; 
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-surveyviewtable',
  templateUrl: './surveyviewtable.component.html',
  styleUrls: ['./surveyviewtable.component.css']
})

export class SurveyviewtableComponent implements OnInit {
  title='survey';
  surveyq: surveyQuestions;
  result: string = '';
  surveytlist: surveyQuestions[] = [];
  selectedSurveyToUpdate: surveyQuestions | undefined;

  // Output event to notify parent components about the edit action
  @Output() editSurveyEvent: EventEmitter<surveyQuestions> = new EventEmitter<surveyQuestions>();

  constructor(private service: SurveyService) {
    this.surveyq = new surveyQuestions();
    this.getAllSurveyQuestion();
  }

  ngOnInit(): void {
    // Additional setup if needed
  }

  getAllSurveyQuestion() {
    this.service.getAllSurveyQuestion().subscribe(surveyq => (this.surveytlist = surveyq));
  }

  deleteSurvey(surveyq: surveyQuestions) {
    this.service.deleteSurvey(surveyq).subscribe(() => {
      this.service.getSurveyDeletedEvent().emit();
    });
  }


  editSurvey(surveyq: surveyQuestions): void {
    this.selectedSurveyToUpdate=(surveyq);
  }

  openUpdateForm(surveyq: surveyQuestions) {
    this.selectedSurveyToUpdate = { ...surveyq };
  }
}


