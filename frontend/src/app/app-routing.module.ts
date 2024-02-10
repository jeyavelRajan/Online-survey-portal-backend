import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserviewComponent } from './userview/userview.component';
import { TopicdetailsComponent } from './topicdetails/topicdetails.component';
import { ReportviewComponent } from './reportview/reportview.component';
import { SurveyResponseComponent } from './user-survey-response/user-survey-response.component';
import { HomeComponent } from './home/home.component';
import { UpdateSurveyComponent } from './update-survey/update-survey.component';
import { SurveyUpdateFormComponent } from './survey-update-form/survey-update-form.component';
import { SurveyviewtableComponent } from './surveyviewtable/surveyviewtable.component';


const routes: Routes = [
  {path:'Register',component:RegisterComponent},
{path:'AdminDashboard',component:AdminDashboardComponent},
{path:'AdminDashboard/userview',component:AdminDashboardComponent},
{path:'login',component:LoginComponent},
{path:'UserDashboard',component:UserDashboardComponent},
{path:'userview',component:UserviewComponent},
{path:'topicdatails',component:TopicdetailsComponent},
{path:'reportview',component:ReportviewComponent},
{path:'userresponse',component:UserDashboardComponent},
{path:'survey-response',component:SurveyResponseComponent},
// {path:'home',component:HomeComponent},
{path:'updateSurvey',component:SurveyUpdateFormComponent},
{path:'surveyupdate',component:UpdateSurveyComponent},
{path:'surveyview',component:SurveyviewtableComponent},
{path:'surveyupform',component:SurveyUpdateFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
