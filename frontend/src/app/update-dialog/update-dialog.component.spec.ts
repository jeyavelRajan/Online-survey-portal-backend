import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateDialogComponent } from "./update-dialog.component";
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import { TopicdetailsComponent } from "../topicdetails/topicdetails.component";
import { MatFormField, MatFormFieldModule } from "@angular/material/form-field";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatRadioModule } from "@angular/material/radio";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";




describe('UpdateUserDialogComponent', () => {
  let component: UpdateDialogComponent;
  let fixture: ComponentFixture<UpdateDialogComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        UpdateDialogComponent,
      ],

      imports: [
        MatButtonModule,
        MatTableModule,
        MatDialogModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatFormFieldModule,
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
        MatIconModule,
        MatDialogRef
        
      ],

    }).compileComponents();
  });


//   beforeEach(() => {
//     fixture = TestBed.createComponent(UpdateDialogComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(UpdateDialogComponent);
    const Component = fixture.componentInstance;
    expect(Component).toBeTruthy();
  });

  it('should initialize updatedUser object', () => {
    const fixture = TestBed.createComponent(UpdateDialogComponent);
    const Component = fixture.componentInstance;
    expect(Component.updatedUser).toBeTruthy();

  });

});





