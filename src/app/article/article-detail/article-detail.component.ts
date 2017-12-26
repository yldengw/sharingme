import { ArticleService } from './../article.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
  article:  Article = new Article();
  constructor(public activeRoute: ActivatedRoute, public articleService: ArticleService) { }
  title: string;
  ngOnInit() {
    this.activeRoute.params.subscribe(
      params => {this.getPost(params['title']); this.title = params['title']; }
    );
  }
  public getPost(id: number) {
    this.articleService
        .getPost(id)
        .subscribe(
          data => this.article = data,
          error => console.error(error)
        );
  }

}
