import 'zone.js/dist/zone';
import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <header>
  <nav>
    <ul>
      <li><a routerLink="/">Home</a></li>     
      <li><a routerLink="/about">About</a></li>
      <li><a routerLink="/input">Input</a></li>
    </ul>
  </nav>
</header>
<main>
<router-outlet></router-outlet>
</main>
 
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [importProvidersFrom(AppRoutingModule)],
});
