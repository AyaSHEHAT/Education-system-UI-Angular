import { Component, OnInit } from '@angular/core';
import { Student } from '../../_Models/student';
import { StudentService } from '../../_Services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-update',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './student-update.component.html',
  styleUrl: './student-update.component.css'
})
export class StudentUpdateComponent implements OnInit{
  nStd:Student=new Student();
  subscribe:Subscription |null=null;
  sub:Subscription |null=null;
  constructor(public studentService:StudentService,public activatedRouter:ActivatedRoute, public router:Router) {}
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
    })}

  Edit(){
    this.sub=this.studentService.Update(this.nStd.id,this.nStd).subscribe({
      next:(data)=>{
        console.log(data);
         //;
      },
      error:(err)=>{
        console.log(err);
        
      }
    })
    //this.studentService.Update();
    console.log(this.nStd);
    this.router.navigate(["/students"])
  }
}
