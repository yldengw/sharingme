import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';


export const articleRoutes = [
    {
        path: '',
        redirectTo: 'page/1',
        pathMatch: 'full'
   },
   {
       path: 'page/:page',
       component: ArticleListComponent
    },
    {
        path: 'detail/:title',
        component: ArticleDetailComponent
     }
];