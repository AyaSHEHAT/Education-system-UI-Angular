import { Component } from '@angular/core';
import { Department } from '../../_Models/department';
import { Router } from '@angular/router';
import { DepartmentService } from '../../_Services/department.service';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-department-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './department-add.component.html',
  styleUrl: './department-add.component.css'
})
export class DepartmentAddComponent {
  dept:Department=new Department();
  sub:Subscription|null = null;
  constructor(public deptService:DepartmentService, public router:Router) {}
  Save(){
   this.sub = this.deptService.Add(this.dept).subscribe({
    next:(data)=>{
    this.router.navigate(["/departments"]);
    },
    error:(err)=>{
      console.log(err);
    }
   });
    
  }
}
