import { Routes } from "@angular/router";
import { StudentListComponent } from "./student-list/student-list.component";
import { StudentAddComponent } from "./student-add/student-add.component";
import { StudentDetailsComponent } from "./student-details/student-details.component";
import { StudentDeleteComponent } from "./student-delete/student-delete.component";
import { StudentUpdateComponent } from "./student-update/student-update.component";
export const studentsRoutes: Routes = [
{ path: "", component: StudentListComponent ,children:[
    { path: "details/:id", component: StudentDetailsComponent },
    { path: "delete/:id", component: StudentDeleteComponent },
]},

{ path: "add", component: StudentAddComponent },
{ path: "edit/:id", component: StudentUpdateComponent },
];