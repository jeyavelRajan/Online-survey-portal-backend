
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SurveyviewtableComponent } from './surveyviewtable.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
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

describe('SurveyViewTableComponent', () => {
    let component: SurveyviewtableComponent;
    let fixture: ComponentFixture<SurveyviewtableComponent>;
  
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [SurveyviewtableComponent],
        imports: [HttpClientTestingModule,
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
            MatCardModule], // Import HttpClientTestingModule
      }).compileComponents();
    });


    it('surveyViewTable Component Test', () => {
        const fixture = TestBed.createComponent(SurveyviewtableComponent);
        const login = fixture.componentInstance;
        expect(login).toBeTruthy();
      });
    
    
      it(`should have as title 'surveyViewTable Component'`, () => {
        const fixture = TestBed.createComponent(SurveyviewtableComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('survey');
      });

  });