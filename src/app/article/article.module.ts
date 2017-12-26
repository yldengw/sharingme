import { CoreModule } from './../core/core.module';
import { articleRoutes } from './article-routing.module';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleAddComponent } from './article-add/article-add.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleListComponent } from './article-list/article-list.component';
import { RouterModule } from '@angular/router';
import { ArticleService } from './article.service';
@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    RouterModule.forChild(articleRoutes)
  ],
  declarations: [
    ArticleAddComponent,
    ArticleDetailComponent,
    ArticleListComponent
  ],
  providers: [ArticleService]
})
export class ArticleModule { }
