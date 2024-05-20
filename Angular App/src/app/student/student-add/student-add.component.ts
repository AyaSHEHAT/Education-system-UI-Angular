import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../../_Models/student';
import { StudentService } from '../../_Services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-add.component.html',
  styleUrl: './student-add.component.css'
})
export class StudentAddComponent {
  nStd:Student=new Student();
  constructor(public studentService:StudentService, public router:Router) {}
  Save(){
    this.studentService.Add(this.nStd).subscribe({
      next: (data) => {console.log(data);},
      error:(err)=>{console.log(err);
      }
    });
    console.log(this.nStd);
    this.router.navigateByUrl("/students")
      }
 
}
