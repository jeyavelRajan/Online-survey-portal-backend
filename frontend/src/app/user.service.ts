
import { Injectable } from '@angular/core';
import { Users } from 'src/model/Users'; 
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  private url : string="http://localhost:9889/users";


    registerUser(users : Users){
        this.http.post(this.url+"/register",users).subscribe();
        return "Register successfully";
    }
    loginUser(users : any){
      return this.http.post(this.url+"/login",users);
    }


    deleteUser(user: Users) {
      return this.http.delete(this.url + "/deleteUser/" + user.userId);
  }



  getAllUserDetails(){
    return this.http.get<Users[]>(this.url+"/getAllUserDetails");
}


getAllCandidates(){
  return this.http.get<Users[]>(this.url+"/getAllCandidates");
}


getUserByUserId(users : Users){
  return this.http.get<Users[]>(this.url+"/getUserDetail/"+ users.userId);
}


updateUser(users:Users){
  return this.http.put(this.url+"/update/"+users.userId,users)
}
constructor(private http : HttpClient) { }
}


