import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <header>
      <app-header></app-header>
    </header>
    <main>
      <nav class="sidenav">
        <app-sidenav></app-sidenav>
      </nav>
      <content class="content">
        <router-outlet></router-outlet>
      </content>
    </main>
  `,
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidenavComponent],
  providers: [{ provide: Window, useValue: 'window' }],
})
export class AppComponent {
  title = 'social-network';
}
