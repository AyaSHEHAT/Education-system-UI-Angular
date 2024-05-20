import { Component } from '@angular/core';
import { Department } from '../../_Models/department';
import { Subscription } from 'rxjs';
import { DepartmentService } from '../../_Services/department.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-delete',
  standalone: true,
  imports: [],
  templateUrl: './department-delete.component.html',
  styleUrl: './department-delete.component.css'
})
export class DepartmentDeleteComponent {
  //dept:Department=new Department();
  subscribe:Subscription |null=null;
  sub:Subscription |null=null;
  constructor(public deptService:DepartmentService,public activatedRouter:ActivatedRoute, public router:Router) {}
  ngOnInit(): void {
    this.subscribe= this.activatedRouter.params.subscribe((params) =>{
      const id=params['id'];
      console.log(id);
      this.sub=this.deptService.Delete(id).subscribe({
        next:(data)=>{
          console.log(data);
          window.location.reload();
          this.router.navigateByUrl("/departments")
        },
        error:(err)=>{
          console.log(err);
        }
      });
      
     // this.deptService.Delete(id);
    })
    // this.deptService.Delete(this.dept.Id);
  }
    // delete(){
    //   this.deptService.Delete(this.dept.Id);
    //   console.log(this.dept);
      
    // }
}
