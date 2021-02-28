import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ExtraOptions,
  PreloadAllModules,
  RouterModule,
  Routes,
} from '@angular/router';

export const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
    canActivate: [],
  },
  { path: '', redirectTo: '/pages/dashboard', pathMatch: 'full' },
];

const config: ExtraOptions = {
  useHash: false,
  preloadingStrategy: PreloadAllModules,
  onSameUrlNavigation: 'reload',
};

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
