import { Routes } from "@angular/router";
import { DepartmentListComponent } from "./department-list/department-list.component";
import { DepartmentDetailsComponent } from "./department-details/department-details.component";
import { DepartmentDeleteComponent } from "./department-delete/department-delete.component";
import { DepartmentAddComponent } from "./department-add/department-add.component";
import { DepartmentUpdateComponent } from "./department-update/department-update.component";
export const departmentsRoutes: Routes = [
{ path: "", component: DepartmentListComponent ,children:[
    { path: "details/:id", component: DepartmentDetailsComponent },
    { path: "delete/:id", component: DepartmentDeleteComponent },
]},

{ path: "add", component: DepartmentAddComponent },
{ path: "edit/:id", component: DepartmentUpdateComponent },
];