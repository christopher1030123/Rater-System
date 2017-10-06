import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Course } from './course';

@Injectable()
export class CourseService {

  result: any;
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private coursesUrl = 'api/courses';  // URL to course api

  constructor(private http: Http) { }

  getCourses(): Promise<Course[]> {
    return this.http.get(this.coursesUrl)
      .toPromise()
      .then(response => response.json().data as Course[])
      .catch(this.handleError);
  }

  getCourse(id: number): Promise<Course> {
    const url = `${this.coursesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Course)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('Unable to retrieve courses', error);
    return Promise.reject(error.message || error);
  }

}
