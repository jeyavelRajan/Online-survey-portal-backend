import { Component } from '@angular/core';
import { Reports } from 'src/model/Report';
import { ReportsService } from '../report.service';

@Component({
  selector: 'app-reportview',
  templateUrl: './reportview.component.html',
  styleUrls: ['./reportview.component.css']
})
export class ReportviewComponent {

  Report: Reports;
  result: string="";
  repotlist: Reports[]=[];

  constructor(private service:ReportsService){
    this.Report = new Reports();
    this.getAllReports();
  }

  getAllReports(){
    this.service.getAllReports().subscribe(Report=>this.repotlist=Report)
  }


}

