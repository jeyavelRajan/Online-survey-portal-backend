// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { TopicdetailsComponent } from './topicdetails.component';

// describe('TopicdetailsComponent', () => {
//   let component: TopicdetailsComponent;
//   let fixture: ComponentFixture<TopicdetailsComponent>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [TopicdetailsComponent]
//     });
//     fixture = TestBed.createComponent(TopicdetailsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TopicdetailsComponent } from './topicdetails.component';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule, By } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from '../app-routing.module';


describe('YourComponent', () => {
  let component: TopicdetailsComponent;
  let fixture: ComponentFixture<TopicdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TopicdetailsComponent,
      ],
      imports: [
        MatButtonModule,
        MatTableModule,
        MatDialogModule,
        BrowserAnimationsModule,
        HttpClientModule,
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
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });


  it('should call openInsertSurvey method when Insert button is clicked', () => {
    spyOn(component, 'openInsertSurvey');
    const insertButton = fixture.debugElement.query(By.css('button[mat-raised-button][color="primary"]'));
    insertButton.nativeElement.click();
    expect(component.openInsertSurvey).toHaveBeenCalled();
  });


  

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});



