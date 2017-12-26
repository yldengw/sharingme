import { Article } from './article';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class ArticleService {
  public postListURL = 'mock-data/articles-mock.json';
  public postListSearchURL = 'mock-data/article-search-mock.json';
  public postDetailURL = 'mock-data/article-mock.json';

  constructor(public http: Http) { }
  public getPostList(searchText: string, page: number = 1): Observable<Article[]> {
    let url = this.postListURL;
    const params = new URLSearchParams();
    if (searchText) {
        params.set('searchText', searchText);
      url = this.postListSearchURL;
      console.log(`searchText=${searchText}`);
    }
    params.set('page', String(page));
    return this.http
               .get(url, {search: params})
               .map((res: Response) => {
                 const result = res.json();
                   console.log(result);
                   return result;
               })
               .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  public getPostNumber(): number {
    return 0;
  }

  public addPost(user: any) {

  }
  public getPost(id: number): Observable<Article> {
    return 	this.http
          .get(this.postDetailURL)
              .map((res: Response) => res.json());
}
  public search() {
  }
}
