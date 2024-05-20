import { Injectable } from '@angular/core';
import { Department } from '../_Models/department';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  isActive: boolean = false;
  dept: Department = new Department();
  baseUrl:string="https://localhost:7020/api/Departments";
  // private DepartmentList: Department[] = [

  // ];
  
  constructor(public http:HttpClient) { }
  getAll() {
    return this.http.get<Department[]>(this.baseUrl);
    // return this.DepartmentList;
  }
  Add(dept: Department) {
    return this.http.post<Department>(this.baseUrl,dept)
  }

  Update(id:number, department:Department) {
    return this.http.put<Department>(this.baseUrl +"/"+id,department);
    // const index = this.DepartmentList.findIndex((a) => a.id == id);
    // if (index != -1) {
    //   this.DepartmentList[index].id = this.dept.id;
    //   this.DepartmentList[index].name = this.dept.name;
    //   this.DepartmentList[index].loc = this.dept.loc;
    // }              
  }
  // details(dept: Department) {
  //   this.dept = dept;
  //   // this.isActive = false;
  // }
  // ShowForm(dept: Department) {
  //   this.dept = new Department(dept.id, dept.name, dept.loc);
  //   this.isActive = true;
  // }
  GetById(id: number) {
    return this.http.get<Department>(this.baseUrl +"/"+id);
    // const index = this.DepartmentList.findIndex((a) => a.id == id);
    // if (index != -1) {
    //   this.dept.id = this.DepartmentList[index].id;
    //   this.dept.name = this.DepartmentList[index].name;
    //   this.dept.loc = this.DepartmentList[index].loc;
    // }
    // return this.dept;
  }

  Delete(id: number) {
    console.log(id);
    return this.http.delete(this.baseUrl+"/"+id)
    // const index = this.DepartmentList.findIndex((a) => a.id == id);
    // if (index != -1) {
    //   this.DepartmentList.splice(index, 1);
    // }
    // console.log(id); 
    
  }
}
