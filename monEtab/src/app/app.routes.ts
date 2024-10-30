import { Routes } from '@angular/router';
import { ConnexionComponent } from './presentations/connexion/connexion.component';
import { DashbordComponent } from './presentations/dashbord/dashbord.component';
import { RapportComponent } from './presentations/rapport/rapport.component';
import { TeachersComponent } from './presentations/teachers/teachers.component';
import { EditTeachersComponent } from './presentations/edit-teachers/edit-teachers.component';
import { EditStudentComponent } from './presentations/edit-student/edit-student.component';
import { EditUserComponent } from './presentations/edit-user/edit-user.component';
import { UpdateStudentsComponent } from './presentations/update-students/update-students.component';
import { UpdateTeacherComponent } from './presentations/update-teacher/update-teacher.component';
import { UpdateUserComponent } from './presentations/update-user/update-user.component';


export const routes: Routes = [
    { path: 'login', component: ConnexionComponent},
    { path: 'dashbord', component: DashbordComponent},
    { path: 'rapport', component: RapportComponent},
    { path: 'teachers', component: TeachersComponent},
    { path: 'ajouter-Professeur', component: EditTeachersComponent},
    { path: 'ajouter-eleve', component: EditStudentComponent},
    { path: 'students', component: EditStudentComponent},
    { path: 'ajouter-User', component: EditUserComponent},
    { path: 'modifier-eleve', component: UpdateStudentsComponent},
    { path: 'modifier-professeur', component: UpdateTeacherComponent},
    { path: 'modifier-user', component: UpdateUserComponent},














];
