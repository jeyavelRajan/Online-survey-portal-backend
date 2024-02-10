import { Component, Inject } from '@angular/core';
   import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
   import { topics } from 'src/model/Topics';

   @Component({
     selector: 'app-update-survey',
     templateUrl: './update-survey.component.html',
     styleUrls: ['./update-survey.component.css']
   })
   export class UpdateSurveyComponent {

     constructor(
       public dialogRef: MatDialogRef<UpdateSurveyComponent>,
       @Inject(MAT_DIALOG_DATA) public data: topics
     ) {}

     onNoClick(): void {
       this.dialogRef.close();
     }

     onUpdateClick(): void {
       // Handle the update logic here
       // You can pass the updated data back to the parent component if needed
       this.dialogRef.close(this.data);
     }
   }
