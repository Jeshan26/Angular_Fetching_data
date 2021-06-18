import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student Details';
  // url of students data
  stu_data_api='https://api.hatchways.io/assessment/students'
   students;
   Name;
   // http service for api call or we can create a service and call the function here also
    constructor(private http:HttpClient){
    
    }
    ngOnInit() {
      // api call to get the json data
      this.http.get(this.stu_data_api).subscribe(
        val => this.students = val['students']
      ) 
    }

    search(){
      if(this.Name==""){
        this.ngOnInit();
      }
      else{
        console.log(this.Name)
      this.students = this.students.filter(res=>{
        // this returns the student that match with the name entered in search box
        return res.firstName.toLowerCase().match(this.Name.toLowerCase()) || res.lastName.toLowerCase().match(this.Name.toLowerCase()) ;
      });
      }
      }
    
}
