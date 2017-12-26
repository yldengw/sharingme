import { TreeComponent } from './directive/tree/tree.component';
import { JwtService } from './service/jwt.service';
import { ShowAuthedDirective } from './directive/show-authed.directive';
import { UserLoginComponent } from './../user/user-login/user-login.component';
import { HeaderComponent } from './layout/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { UserService } from './service/user.service';
import { TranslateModule } from 'ng2-translate';
import { SlideComponent } from './directive/slide/slide.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    TranslateModule
  ],
  declarations: [HeaderComponent, UserLoginComponent, ShowAuthedDirective, TreeComponent],
  exports: [
    HeaderComponent, UserLoginComponent, ShowAuthedDirective, TreeComponent
  ],
  providers: [JwtService, UserService]
})
export class SharedModule { }
