import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-survey-response',
  templateUrl: './user-survey-response.component.html',
  styleUrls: ['./user-survey-response.component.css']
})
export class SurveyResponseComponent implements OnInit {
  @Input() responses: any[] = [];

  constructor( private router:Router) { }

  ngOnInit() {
    // Ensure responses are properly received
    console.log('Received responses:', this.responses);
  }

logout():void{
  this.router.navigate(['/Register'])
}

}