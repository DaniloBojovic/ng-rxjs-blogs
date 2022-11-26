import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { combineLatest, map, Subject, takeUntil } from 'rxjs';
import { Blog } from '../core/model/blog.model';
import { BlogsService } from '../core/services/blogs-service';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogsListComponent implements OnInit {
  blogs$ = this.blogsService.blogs$;
  filteredBlogsAction$ = this.blogsService.filterBlogsAction$;
  // filteredBlogs$ = combineLatest([this.blogs$, this.filteredBlogsAction$]).pipe(
  //   map(([blogs, filter]: [Blog[], Blog]) => {
  //     return blogs.filter((blogs) => blogs.title?.toLowerCase().indexOf(filter?.title?.toLowerCase() ?? '') != -1);
  //   })
  // );
  filteredBlogs$ = combineLatest([this.blogs$, this.filteredBlogsAction$]);

  constructor(private blogsService: BlogsService) {}

  ngOnInit(): void {}
}
