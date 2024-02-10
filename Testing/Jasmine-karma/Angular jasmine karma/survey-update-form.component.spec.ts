import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyUpdateFormComponent } from './survey-update-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

describe('SurveyUpdateFormComponent', () => {
  let component: SurveyUpdateFormComponent;
  let fixture: ComponentFixture<SurveyUpdateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveyUpdateFormComponent],
      imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTableModule,
        MatSnackBarModule,
        MatCardModule,
        FormsModule

      ],
    });
    fixture = TestBed.createComponent(SurveyUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Survey-update Component Test', () => {
    const fixture = TestBed.createComponent(SurveyUpdateFormComponent);
    const login = fixture.componentInstance;
    expect(login).toBeTruthy();
  });


  it(`should have as title 'survey-update Form Component'`, () => {
    const fixture = TestBed.createComponent(SurveyUpdateFormComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('survey-update');
  });






  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

