import { Observable } from 'rxjs/Rx';
import { Article } from './../article';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  public itemsPerPage = 5;
  public totalRecords = 18;
  public currentPage = 1;
  public offset = 0;
  public end = 0;

  public searchText: string;
  public searchTextStream: Subject<string> = new Subject<string>();

  public postList: Array<Article>;

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public postService: ArticleService) {

    console.log('------这里开始对比Promise和Observable，这块代码是为了学习Observable使用的------');

    // 以下是Promise的写法
    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve('---promise timeout---');
      }, 2000);
    });
    promise.then(value => console.log(value));

    // 以下是Observable的写法
    const stream1$ = new Observable(observer => {
      const timeout = setTimeout(() => {
        observer.next('observable timeout');
      }, 2000);

      return () => {
        clearTimeout(timeout);
      };
    });
    const disposable = stream1$.subscribe(value => console.log(value));

    // 【第一个核心不同点来了】：Observable是可以中途取消的，而Promise一旦触发就不能取消了
    // setTimeout(() => {
    //     disposable.unsubscribe();
    // }, 1000);

    // 【第二个核心不同点来了】：Observable可以持续发射很多值，而Promise只能发射一个值就结束了
    // let stream2$ = new Observable(observer => {
    //     let count = 0;
    //     let interval = setInterval(() => {
    //         observer.next(count++);
    //     }, 1000);

    //     return () => {
    //         clearInterval(interval);
    //     }
    // });
    // stream2$.subscribe(value => console.log(value));

    // 【第三个核心不同点来了】：Observable提供了很多的工具函数，最最最常用的filter和map演示如下
    // stream2$
    //   .filter(value => value % 2 == 0)
    //   .subscribe(value => console.log(value));

    // stream2$
    //   .map(value => value * value)
    //   .subscribe(value => console.log(value));

  }

  ngOnInit() {
    // 从路由里面获取URL参数
    this.activeRoute.params.subscribe(params => {
      console.log(params);
      this.currentPage = params.page;
      this.loadData(this.searchText);
    });

    this.searchTextStream
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(searchText => {
        console.log(this.searchText);
        this.loadData(this.searchText);
      });
  }

  public loadData(searchText: string) {
    this.offset = (this.currentPage - 1) * this.itemsPerPage;
    this.end = (this.currentPage) * this.itemsPerPage;
    return this.postService.getPostList(searchText, this.currentPage).subscribe(
      res => {
        this.postList = res['items'].slice(this.offset, this.end > this.totalRecords ? this.totalRecords : this.end);
        console.log(this.offset);
        console.log(this.end);
        console.log(this.totalRecords);
      },
      error => { console.log(error)},
      () => { }
    );
  }

  public pageChanged(event: any): void {
    const temp = parseInt(event.page) + 1;
    this.router.navigateByUrl('articles/page/' + temp);
  }

  public searchChanged($event): void {
    this.searchTextStream.next(this.searchText);
  }

  public gotoWrite(): void {
    // TODO：如果没有登录，跳转到登录页，如果已登录，跳往写作页
    this.router.navigateByUrl('user/write');
  }

}
