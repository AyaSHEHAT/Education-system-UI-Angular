import { Component, OnDestroy, OnInit } from '@angular/core';
import { Student } from '../../_Models/student';
import { StudentService } from '../../_Services/student.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent implements OnInit, OnDestroy{
  nStd:Student=new Student();
  index:number=0;
  subscribe:Subscription |null=null;
  sub:Subscription |null=null;

  constructor(public studentService:StudentService,public activatedRouter:ActivatedRoute) {}
  ngOnInit(): void {
    this.subscribe= this.activatedRouter.params.subscribe((params) =>{
      const id=params['id'];
      this.sub=this.studentService.GetById(id).subscribe({
        next:(data)=>{
          this.nStd=data;
        },
        error:(err)=>{
          console.log(err);
          
        }
      })
      //this.nStd=this.studentService.GetById(id);
    })
  //  this.nStd=this.studentService.GetById(this.index);
  //  console.log(this.index, this.nStd);
  }
  ngOnDestroy(){
    this.subscribe?.unsubscribe();
  }
  
}
