import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
import { surveyQuestions } from 'src/model/SurveyQuestions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  showResponseForm: boolean = false;
  showResponseForm1: boolean = true;
  selectedOptions: Map<number, string> = new Map<number, string>();
  surveytlist: surveyQuestions[] = [];
  userResponses: any[] = []; // Add this line

  constructor(private surveyService: SurveyService,private router: Router) {}

  ngOnInit() {
    this.getAllSurveyQuestion();
  }

  getAllSurveyQuestion() {
    this.surveyService.getAllSurveyQuestion().subscribe(surveyq => this.surveytlist = surveyq);
  }

  // Select option logic
  selectOption(surveyq: surveyQuestions, option: string) {
    // Store selected option for each survey question
    this.selectedOptions.set(surveyq.surveyId, option);
  }

  // Submit survey logic
  submitSurvey() {
    // Assuming you have logic to collect responses in userResponses array
    this.userResponses = this.prepareResponses();
    
    // Collect responses and display response form
    this.showResponseForm = true;
    this.showResponseForm1 = false;

  }

  // Additional method to prepare responses
  prepareResponses(): any[] {
    const responses: any[] = [];

    this.selectedOptions.forEach((option, surveyId) => {
      responses.push({ surveyId: surveyId, response: option });
    });

    return responses;
  }

redirectToSurveyResponse() {
  this.router.navigate(['/survey-response']);
}

}	

