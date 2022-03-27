import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./pages/page-home/page-home.module').then(
        (m) => m.PageHomeModule
      ),
  },

  {
    path: 'users',
    loadChildren: () =>
      import('./pages/page-users/page-users.module').then(
        (m) => m.PageUsersModule
      ),
  },

  {
    path: 'colors',
    loadChildren: () =>
      import('./pages/page-colors/page-colors.module').then(
        (m) => m.PageColorsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
