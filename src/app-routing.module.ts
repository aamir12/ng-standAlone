import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

// import { WelcomeComponent } from './welcome/welcome.component';

const routes: Route[] = [
  {
    path: '',
    //component: WelcomeComponent,
    loadComponent: () =>
      import('./welcome/welcome.component').then((mod) => mod.WelcomeComponent),
  },
  {
    path: 'about',
    // component: AboutComponent,
    loadComponent: () =>
      import('./about/about.component').then((mod) => mod.AboutComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
