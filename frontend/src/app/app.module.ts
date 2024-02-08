import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { MatCardModule } from '@angular/material/card';
import { UserService } from './user.service';
import {MatMenuModule} from '@angular/material/menu';
import { MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from "@angular/material/expansion";
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { SurveyService } from './survey.service';
import { UserviewComponent } from './userview/userview.component';
import { TopicdetailsComponent } from './topicdetails/topicdetails.component';
import { TopicsService } from './topic.service';
import { ReportviewComponent } from './reportview/reportview.component';
import { ReportsService } from './report.service';
import { ServicequestionService } from './servicequestion.service';
 import { MatPaginatorModule } from '@angular/material/paginator'; 
 import { MatSortModule } from '@angular/material/sort';
 import { MatDialogModule } from '@angular/material/dialog';
import { UpdateDialogComponent } from './update-dialog/update-dialog.component';
import { SurveyResponseComponent } from './user-survey-response/user-survey-response.component';
import { CommonModule } from '@angular/common';
import { UpdateSurveyComponent } from './update-survey/update-survey.component';
import { HomeComponent } from './home/home.component';
import { InsertSurveyComponent } from './insert-survey/insert-survey.component';
import { SurveyUpdateFormComponent } from './survey-update-form/survey-update-form.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { SurveyviewtableComponent } from './surveyviewtable/surveyviewtable.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    RegisterComponent,
    LoginComponent,
    UserDashboardComponent,
  
    SurveyviewtableComponent,
    UserviewComponent,
     TopicdetailsComponent,
     ReportviewComponent,
     UpdateDialogComponent,
     SurveyResponseComponent,
     UpdateSurveyComponent,
     HomeComponent,
     InsertSurveyComponent,
     SurveyUpdateFormComponent,
    
  



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    MatCardModule,
    MatMenuModule,
    MatSidenavModule,
    MatExpansionModule ,
    MatListModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    CommonModule,
    MatIconModule
  

  ],

  
  providers: [ 
    UserService,
    SurveyService,
    TopicsService,
    ReportsService,
    ServicequestionService,
    
    
  ],
  
  bootstrap: [AppComponent],


})
export class AppModule { }



