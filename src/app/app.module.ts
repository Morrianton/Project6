import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {environment} from "../environments/environment";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ScorecardComponent } from "./scorecard/scorecard.component";
import { CourseSelectionComponent} from "./course-selection/course-selection.component";
import { WelcomeComponent } from './welcome/welcome.component';
import { RegistrationComponent } from './registration/registration.component';

import { CoursesService } from "./services/courses.service";

@NgModule({
  declarations: [
    AppComponent,
    ScorecardComponent,
    CourseSelectionComponent,
    WelcomeComponent,
    RegistrationComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }