import { Component, OnInit } from '@angular/core';
import { GolfCourses } from "../models/GolfCourses";
import { Course } from "../models/Course";
import { TeeType } from "../models/TeeType";
import { CoursesService } from "../services/courses.service";

@Component({
  selector: 'course-selection',
  templateUrl: './course-selection.component.html',
  styleUrls: ['./course-selection.component.css']
})
export class CourseSelectionComponent implements OnInit {

  golfCourses: GolfCourses;
  course: Course;
  courseID: number;
  teeTypes: TeeType[];

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe((golfCourses: GolfCourses) => {
      this.golfCourses = golfCourses;
    })
  }

  getTeeTypes(courseID: number): void {
    this.coursesService.getTeeTypes(courseID).subscribe((course: Course) => {
      this.course = course;
      this.teeTypes = course.course.tee_types;
    })
  }

}
