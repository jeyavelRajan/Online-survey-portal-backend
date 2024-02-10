import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { topics } from 'src/model/Topics';

@Component({
  selector: 'app-insert-survey',
  templateUrl: './insert-survey.component.html',
  styleUrls: ['./insert-survey.component.css']
})
export class InsertSurveyComponent {
  dataForm: any;
  title='insertsurvey';

  constructor(
    public dialogRef: MatDialogRef<InsertSurveyComponent>,
    @Inject(MAT_DIALOG_DATA) public data: topics
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onInsertClick(): void {
    this.dialogRef.close(this.data);
  }




}