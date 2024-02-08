


import { Injectable } from '@angular/core';
import { topics } from '../model/Topics';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TopicsService {


  private url : string="http://localhost:9889/topics";


 
//   addTopic(topics : topics){
//     this.http.post(this.url+"/addTopic",topics).subscribe();
//     return "Topic Added successfully";
// }

addTpoic(topic:topics):Observable<any>{
  return this.http.post<any>(`${this.url}/addTopic`,topic);
   

}

deleteTopic(topic: topics): Observable<any> {
  return this.http.delete(`${this.url}/deleteTopic/${topic.topicId}`);
}


    getAllTopics(){
      return this.http.get<topics[]>(this.url+"/getAllTopics");
    }
   
    getTopicById(topics : topics){
      return this.http.get<topics[]>(this.url+"/getTopic/"+ topics.topicId);
    }



    updateTopic(topic: topics): Observable<any> {
      return this.http.put(`${this.url}/updateTopic`, topic);
    }

    


   constructor(private http : HttpClient) { }
}
