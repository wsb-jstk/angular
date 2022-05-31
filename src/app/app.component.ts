import { Component } from '@angular/core';

export type Page = 'OVERVIEW' | 'PROJECT' | 'ADMIN';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  page: Page = 'OVERVIEW';
  projectId: number | undefined;
  openPage(page: Page) {
    this.page = page;
  }

  openProject(projectId: number) {
    this.page = 'PROJECT';
    this.projectId = projectId;
  }
}
