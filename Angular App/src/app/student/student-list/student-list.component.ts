import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../_Services/student.service';
import { Student } from '../../_Models/student';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit{
  students:Student[]=[];
  sub:Subscription|null=null;
  constructor(public studentService:StudentService) {}
  ngOnInit(){
    this.sub=this.studentService.getAll().subscribe({
      next:(data)=>{
        this.students=data
        console.log(data);
        
      },
      error:(err)=>console.log(err)
    });
    
  }
  load(){
    //this.students=this.studentService.getAll();
  }
 
}
