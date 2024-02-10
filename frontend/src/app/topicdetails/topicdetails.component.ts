import { Component, TypeProvider } from '@angular/core';
import { topics } from 'src/model/Topics';
import { TopicsService } from '../topic.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateSurveyComponent } from '../update-survey/update-survey.component';
import { InsertSurveyComponent } from '../insert-survey/insert-survey.component';


@Component({
  selector: 'app-topicdetails',
  templateUrl: './topicdetails.component.html',
  styleUrls: ['./topicdetails.component.css']
})
export class TopicdetailsComponent {

topic:topics;
result: string="";
resultlist : topics[] = [];
constructor(private service:TopicsService ,private dialog:MatDialog){
  this.topic=new topics();
  this.getAllTopics();

}
getAllTopics(){
  this.service.getAllTopics().subscribe(topic=>this.resultlist=topic)
}



deleteTopic(topic: topics) {
  this.service.deleteTopic(topic).subscribe(() => {
    // Optionally, update the topic list after successful deletion
    this.getAllTopics();
  });
}



   openUpdateSurvey(topic: topics): void {
     const dialogRef = this.dialog.open(UpdateSurveyComponent, {
       width: '400px',
       data: { ...topic } // Pass a copy of the topic to avoid changing the original directly
     });

     

     dialogRef.afterClosed().subscribe(result => {
       // Handle the result here (result will be the updated data if the user clicked "Update")
       if (result) {
         // Call your update method with the updated data
         this.service.updateTopic(result).subscribe(() => {
           this.getAllTopics();
         });
       }
     });
    }

    openInsertSurvey(): void {
      const dialogRef = this.dialog.open(InsertSurveyComponent, {
        width: '400px',
        data: { topicId: null!, topicName: '' } as topics // Initialize with default values
      });
    
      dialogRef.afterClosed().subscribe(result => {
        // Handle the result here (result will be the inserted data if the user clicked "Insert")
        if (result) {
          // Call your insert method with the inserted data
          this.service.addTpoic(result).subscribe(() => {
            this.getAllTopics();
          });
        }
      });

   }



}
