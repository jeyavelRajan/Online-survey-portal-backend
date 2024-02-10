
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reports } from 'src/model/Report'; 


@Injectable({
  providedIn: 'root'
})
export class ReportsService {


  private url : string="http://localhost:9889/reports";


 
  addRport(reports : Reports){


    this.http.post(this.url+"/addReport",reports).subscribe();
    return "Report Added successfully";
}


deleteReport(reports : Reports){
  this.http.delete(this.url+"/deleteReport/"+reports.reportId).subscribe();
  return "Report Deleted";
}


    getAllReports(){
      return this.http.get<Reports[]>(this.url+"/getAllReportDetails");
    }
   
    getReportById(reports : Reports){
      return this.http.get<Reports[]>(this.url+"/getReportDetail/"+ reports.reportId);
    }


   constructor(private http : HttpClient) { }



  }