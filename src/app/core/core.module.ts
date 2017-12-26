import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { GrowlModule, MenubarModule,
  CalendarModule, PaginatorModule, PanelMenuModule, DialogModule, SelectButtonModule, FileUploadModule } from 'primeng/primeng';
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpModule
  ],
  exports: [
    GrowlModule
    , MenubarModule, ReactiveFormsModule,
     CalendarModule, PaginatorModule, PanelMenuModule, DialogModule, SelectButtonModule, FileUploadModule
  ],
  providers: []
})
export class CoreModule {

}
