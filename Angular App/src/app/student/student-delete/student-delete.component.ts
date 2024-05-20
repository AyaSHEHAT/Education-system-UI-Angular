import { Component, OnInit } from '@angular/core';
import { Student } from '../../_Models/student';
import { StudentService } from '../../_Services/student.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-delete',
  standalone: true,
  imports: [],
  templateUrl: './student-delete.component.html',
  styleUrl: './student-delete.component.css'
})
export class StudentDeleteComponent implements OnInit {
 
  nStd:Student=new Student();
  subscribe:Subscription |null=null; 
  sub:Subscription |null=null; 
  constructor(public studentService:StudentService,public activatedRouter:ActivatedRoute, public router:Router) {}
  ngOnInit(): void {
    this.subscribe= this.activatedRouter.params.subscribe((param) =>{
      let id=param['id'];
      console.log(id);
     this.sub= this.studentService.Delete(id).subscribe({
        next:(data)=>{
          console.log(data);
          window.location.reload();
          this.router.navigateByUrl("/students")
        },
        error:(err)=>{console.log(err);}
      });
    })
    // this.subscribe= this.activatedRouter.params.subscribe((params) =>{
    //   const id=params['id'];
      
    //   this.sub=this.deptService.Delete(id).subscribe({
    //     next:(data)=>{
    //       console.log(data);
    //       window.location.reload();
    //       this.router.navigateByUrl("/departments")
    //     },
    //     error:(err)=>{
    //       console.log(err);
    //     }
    //   });
  }
  
}
