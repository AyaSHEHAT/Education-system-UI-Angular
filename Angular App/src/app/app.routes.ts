import { Routes } from '@angular/router';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentAddComponent } from './student/student-add/student-add.component';
import { StudentDeleteComponent } from './student/student-delete/student-delete.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';
import { StudentUpdateComponent } from './student/student-update/student-update.component';
import { NotFoundError } from 'rxjs';
import { LoginComponent } from './account/login/login.component';
import { ContactComponent } from './core/contact/contact.component';
import { HomeComponent } from './core/home/home.component';
import { LogoutComponent } from './account/logout/logout.component';

export const routes: Routes = [
    {path:"contact",component:ContactComponent},
    {path:"home",component:HomeComponent},
    { 
        path:"students",
         loadChildren:()=> import("./student/students.routes").then((m)=>m.studentsRoutes),

    },
    { 
        path:"departments",
         loadChildren:()=> import("./department/department.routes").then((m)=>m.departmentsRoutes),

    },
    {path:"login",component:LoginComponent},
    {path:"logout",component:LogoutComponent},
    { path: "", redirectTo: "/home", pathMatch: "full" },
    {path:"**",component:NotFoundError}
];
