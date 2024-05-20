import { Component } from '@angular/core';
import { Department } from '../../_Models/department';
import { Subscription } from 'rxjs';
import { DepartmentService } from '../../_Services/department.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-department-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './department-update.component.html',
  styleUrl: './department-update.component.css'
})
export class DepartmentUpdateComponent {
  dept:Department=new Department();
  subscribe:Subscription |null=null;
  sub:Subscription|null=null;
  constructor(public deptService:DepartmentService,public activatedRouter:ActivatedRoute, public router:Router) {}
  ngOnInit(): void {
    this.subscribe= this.activatedRouter.params.subscribe((params) =>{
      const id=params['id'];
      this.sub=this.deptService.GetById(id).subscribe({
        next:(data)=>{
          this.dept=data;
        },
        error:(err)=>{
          console.log(err);
          
        }
      });
    })}

  Edit(){
    this.sub=this.deptService.Update(this.dept.id,this.dept).subscribe({
      next:(data)=>{
        this.router.navigate(["/departments"])
      },
      error:(err)=>{
        console.log(err);
      }
    });
    
    console.log(this.dept);
   
  }
}
