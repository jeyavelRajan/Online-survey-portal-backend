import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { surveyQuestions } from 'src/model/SurveyQuestions';

@Injectable({
  providedIn: 'root'
})
export class ServicequestionService {

private url : string="http://localhost:9889/survey";



getAllSurveyQuestion(){
  return this.http.get<surveyQuestions[]>(this.url+"/getAllSurveyQuestion");
}


deleteSurvey(surveyq : surveyQuestions){
this.http.delete(this.url+"/deletesurvey/"+surveyq.surveyId).subscribe();
return "Survey Details Deleted";
}


getSurvey(surveyq:surveyQuestions){
return this.http.get<surveyQuestions[]>(this.url+"/getSurvy/"+surveyq.surveyId).subscribe();
}


constructor(private http : HttpClient) { }
}


