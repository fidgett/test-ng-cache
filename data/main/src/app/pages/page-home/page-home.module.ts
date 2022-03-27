import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageHomeComponent } from './page-home.component';

@NgModule({
  declarations: [
    PageHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PageHomeComponent,
      },
    ]),
  ]
})
export class PageHomeModule { }
