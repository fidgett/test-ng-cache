import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageUsersComponent } from './page-users.component';

@NgModule({
  declarations: [PageUsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PageUsersComponent,
      },
    ]),
  ],
})
export class PageUsersModule {}
