import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BlogsService } from '../core/services/blogs-service';

@Component({
  selector: 'app-blogs-list',
  templateUrl: './blogs-list.component.html',
  styleUrls: ['./blogs-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogsListComponent implements OnInit {
  blogs$ = this.blogsService.blogs$;

  constructor(private blogsService: BlogsService) {}

  ngOnInit(): void {}
}
