import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CharactersComponent } from './componentes/characters/characters.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule}  from '@angular/platform-browser/animations';
import { StudentsComponent } from './componentes/students/students.component';
import { StaffComponent } from './componentes/staff/staff.component';
import { SlytherinComponent } from './componentes/slytherin/slytherin.component';
import { GryffindorComponent } from './componentes/gryffindor/gryffindor.component';
import { HufflepuffComponent } from './componentes/hufflepuff/hufflepuff.component';
import { RavenclawComponent } from './componentes/ravenclaw/ravenclaw.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    StudentsComponent,
    StaffComponent,
    SlytherinComponent,
    GryffindorComponent,
    HufflepuffComponent,
    RavenclawComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
