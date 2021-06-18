import { Student } from './../model/student';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.css']
})
export class StudentCardComponent implements OnInit {

  constructor() { }
@Input()
student:Student
counter:boolean = false;;

  ngOnInit(): void {
  }

  showTest(){
  this.counter= true
  }
  hideTest(){
    this.counter= false
  }

}
