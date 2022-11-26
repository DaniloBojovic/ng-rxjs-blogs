import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { BlogsService } from './../core/services/blogs-service';

@Component({
  selector: 'app-blogs-filter',
  templateUrl: './blogs-filter.component.html',
})
export class BlogsFilterComponent implements OnInit {
  blogForm = this.fb.group({
    title: [''],
    category: [''],
    ingredient: [''],
    tags: [''],
    prepTime: [''],
    cookingTime: [''],
  });

  constructor(private fb: FormBuilder, private blogsService: BlogsService) {}

  ngOnInit(): void {}

  filterResults() {
    debugger;
    this.blogsService.updateFilter(this.blogForm.value);
  }

  clearFilter() {}
}
