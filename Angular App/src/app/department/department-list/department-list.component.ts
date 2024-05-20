import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Department } from '../../_Models/department';
import { DepartmentService } from '../../_Services/department.service';

@Component({
  selector: 'app-department-list',
  standalone: true,
  imports: [CommonModule,RouterOutlet,RouterLink],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css'
})
export class DepartmentListComponent implements OnInit{
  depts:Department[]=[];
  constructor(public deptService:DepartmentService) {}
  ngOnInit(){
    this.deptService.getAll().subscribe({
      next:(data)=>{
        this.depts=data;
      },
      error: (err)=>{
        console.log(err);
      },
    });
  }
  
}
