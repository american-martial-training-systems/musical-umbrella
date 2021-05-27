import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./pages/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./pages/about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'links',
        loadChildren: () =>
          import('./pages/links/links.module').then((m) => m.LinksModule),
      },
      {
        path: 'history',
        loadChildren: () =>
          import('./pages/history/history.module').then((m) => m.HistoryModule),
      },
      {
        path: 'faqs',
        loadChildren: () =>
          import('./pages/faqs/faqs.module').then((m) => m.FaqsModule),
      },
      {
        path: 'training',
        loadChildren: () =>
          import('./pages/training/training.module').then((m) => m.TrainingModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
