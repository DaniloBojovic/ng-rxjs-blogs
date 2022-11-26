import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Blog } from '../model/blog.model';
import { BehaviorSubject, catchError, of } from 'rxjs';

const BASE_PATH = environment.basePath;

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  blogs$ = this.http.get<Blog[]>(`${BASE_PATH}/posts`).pipe(catchError((error) => of([])));
  private blogRecipeSubject = new BehaviorSubject<Blog>({ title: '' });
  filterBlogsAction$ = this.blogRecipeSubject.asObservable();

  constructor(private http: HttpClient) {}

  updateFilter(criteria: Blog) {
    this.blogRecipeSubject.next(criteria);
  }
}
