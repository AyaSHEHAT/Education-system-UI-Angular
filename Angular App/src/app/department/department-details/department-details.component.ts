import { Component } from '@angular/core';
import { Department } from '../../_Models/department';
import { Subscription } from 'rxjs';
import { DepartmentService } from '../../_Services/department.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-details',
  standalone: true,
  imports: [],
  templateUrl: './department-details.component.html',
  styleUrl: './department-details.component.css'
})
export class DepartmentDetailsComponent {
  dept:Department=new Department();
  index:number=0;
  subscribe:Subscription |null=null;
  sub:Subscription |null=null;
  constructor(public deptService:DepartmentService,public activatedRouter:ActivatedRoute) {}
  ngOnInit(): void {
   // this.subscribe=this.deptService.GetById()
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
    })
  // this.dept=this.deptService.GetById(this.index);
   console.log(this.index, this.dept);
  }
  ngOnDestroy(){
    this.subscribe?.unsubscribe();
  }
}
