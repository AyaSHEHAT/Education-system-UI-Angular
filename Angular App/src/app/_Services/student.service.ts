import { Injectable } from '@angular/core';
import { Student } from '../_Models/student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
   constructor(public http:HttpClient) { }
    baseUrl:string="https://localhost:7020/api/Student"
    isActive: boolean = false;
    std: Student = new Student();
    StudentList: Student[] = [];
  getAll() {
    return this.http.get<Student[]>(this.baseUrl);
  }
  Add(student: Student) {
    return this.http.post<Student>(this.baseUrl,student)
    //this.StudentList.push(new Student(student.id, student.name, student.age, student.adddress));
  }
  Update(id:number,student:Student) {
    return this.http.put(this.baseUrl+"/"+id,student)
    // const index = this.StudentList.findIndex((a) => a.id == id);
    // if (index != -1) {
    //   this.StudentList[index].id = this.std.id;
    //   this.StudentList[index].name = this.std.name;
    //   this.StudentList[index].age = this.std.age;
    //   this.StudentList[index].adddress = this.std.adddress;
    // }
  }
  GetById(id: number) {
    return this.http.get<Student>(this.baseUrl+"/"+id)
    // const index = this.StudentList.findIndex((a) => a.id == id);
    // if (index != -1) {
    //   this.std.id = this.StudentList[index].id;
    //   this.std.name = this.StudentList[index].name;
    //   this.std.age = this.StudentList[index].age;
    //   this.std.adddress = this.StudentList[index].adddress;
    // }
    // return this.std;
  }
  // details(std: Student) {
  //   this.std = std;
  //   this.isActive = false;
  // }
  Delete(id: number) { 
    return this.http.delete(this.baseUrl+"/"+id);
    // const index = this.StudentList.findIndex((a) => a.id == id);
    // if (index != -1) {
    //   this.StudentList.splice(index,1);
    // }
    // console.log(id);
  }
}
