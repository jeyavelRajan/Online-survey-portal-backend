
 import { EventEmitter, Injectable } from '@angular/core';
 import { HttpClient, HttpHeaders } from '@angular/common/http';
 import { Observable } from 'rxjs';
 import { surveyQuestions } from 'src/model/SurveyQuestions';

 @Injectable({
   providedIn: 'root'
 })
 export class SurveyService {
   private Url = "http://localhost:9889/survey";
   
  private surveyDeleted = new EventEmitter<void>();
  //  surveyUpdatedEvent: EventEmitter<void> ;
   
   surveyUpdatedEvent: EventEmitter<void> = new EventEmitter<void>();

   getAllSurveyQuestion(){
    return this.http.get<surveyQuestions[]>(this.Url+"/getAllSurveyQuestion");
  }


  getSurveyDeletedEvent(): EventEmitter<void> {
    return this.surveyDeleted;
  }

  deleteSurvey(surveyq: surveyQuestions): Observable<any> {
    return this.http.delete(`${this.Url}/deleteSurvey/${surveyq.surveyId}`);
  }
    
    
    getSurvey(surveyq:surveyQuestions){
    return this.http.get<surveyQuestions[]>(this.Url+"/getSurvy/"+surveyq.surveyId).subscribe();
    }

    saveUserResponse(response: string): Observable<any> {
      const saveResponseUrl = `${this.Url}/saveUserResponse`;
      return this.http.post(saveResponseUrl, { response });
    }

    completeSurvey(response: string): Observable<any> {
  
      const completeSurveyUrl = `${this.Url}/completeSurvey`;
      return this.http.post(completeSurveyUrl, { response });
    }
    
    // updateSurvey(surveyq:surveyQuestions){
    //   return this.http.put(this.Url+"/updateSurvey/"+surveyq.surveyId,surveyq)
    // } 


    // updateSurvey(surveyq:surveyQuestions):Observable<any>{
    //   return this.http.put(this.Url+`/updateSurvey/${surveyq.surveyId}`,surveyq);
    // } 
    //     getSurveyUpdatedEvent(): EventEmitter<void> {
    //       return this.surveyUpdatedEvent;
    //     }

    updateSurvey(surveyq: surveyQuestions): Observable<any> {
      return this.http.put(`${this.Url}/updateSurvey/${surveyq.surveyId}`, surveyq);
    }
  
    getSurveyUpdatedEvent(): EventEmitter<void> {
      return this.surveyUpdatedEvent;
    }


      
 


   constructor(private http: HttpClient) {
    this.surveyUpdatedEvent=new EventEmitter<void>;
    }

 }

// import { Injectable, EventEmitter } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { surveyQuestions } from '../model/SurveyQuestions';

// @Injectable({
//   providedIn: 'root'
// })
// export class SurveyService {
//   [x: string]: any;
//   private apiUrl = 'http://localhost:9889/survey';
//   private surveyUpdatedEvent: EventEmitter<void> = new EventEmitter<void>();

//   constructor(private http: HttpClient) { }

//   getAllSurveys(): Observable<surveyQuestions[]> {
//     return this.http.get<surveyQuestions[]>(`${this.apiUrl}/getAllSurveys`);
//   }

//   deleteSurvey(survey: surveyQuestions): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/deleteSurvey/${survey.surveyId}`);
//   }

//   updateSurvey(survey: surveyQuestions): Observable<void> {
//     return this.http.put<void>(`${this.apiUrl}/updateSurvey`, survey);
//   }

//   getSurveyUpdatedEvent(): EventEmitter<void> {
//     return this.surveyUpdatedEvent;
//   }

  
// }
