import { FormComponent } from './form/form.component';
import { UploadComponent } from './upload/upload.component';
import { AmapComponent } from './amap/amap.component';
import { AuthGuard } from './shared/auth-guard.directive';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { ChartComponent } from './chart/chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeedAuthGuard } from './shared/service/no-auth.directive';
import { EditorComponent } from './editor/editor.component';
import { DateComponent } from './date/date.component';
import { TableComponent } from './table/table.component';

const appRoutes: Routes = [

    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {   path: 'dashboard', component: DashboardComponent, canActivate: [NeedAuthGuard]},
    {
        path: 'echart',
        component: ChartComponent, canActivate: [NeedAuthGuard]
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule', canActivate: [NeedAuthGuard]
    },
    {
        path: 'articles',
        loadChildren: './home/home.module#HomeModule', canActivate: [NeedAuthGuard]
    },
    {
        path: 'login',
        component: UserLoginComponent
    },
    {
        path: 'editor',
        component: EditorComponent
    },
    {
        path: 'amap',
        component: AmapComponent
    },
    {
        path: 'date',
        component: DateComponent
    },
    {
        path: 'upload',
        component: UploadComponent
    },
    {
        path: 'forms',
        component: FormComponent
    },
    {
        path: 'tables',
        component: TableComponent
    }
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {'useHash': true})],
    exports: [RouterModule]
})

export class AppRoutingModule {

}