import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageColorsComponent } from './page-colors.component';

@NgModule({
  declarations: [PageColorsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PageColorsComponent,
      },
    ]),
  ],
})
export class PageColorsModule {}
