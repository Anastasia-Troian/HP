import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './componentes/characters/characters.component';
import { GryffindorComponent } from './componentes/gryffindor/gryffindor.component';
import { HufflepuffComponent } from './componentes/hufflepuff/hufflepuff.component';
import { RavenclawComponent } from './componentes/ravenclaw/ravenclaw.component';
import { SlytherinComponent } from './componentes/slytherin/slytherin.component';
import { StaffComponent } from './componentes/staff/staff.component';
import { StudentsComponent } from './componentes/students/students.component';

const routes: Routes = [
  {path: '', component:CharactersComponent},
  {path: 'students', component:StudentsComponent},
  {path: 'staff', component:StaffComponent},
  {path: 'gryffindor', component:GryffindorComponent},
  {path: 'slytherin', component:SlytherinComponent},
  {path: 'hufflepuff', component:HufflepuffComponent},
  {path: 'ravenclaw', component:RavenclawComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
