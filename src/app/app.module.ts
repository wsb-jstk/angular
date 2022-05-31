import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './shared/menu/menu.component';
import { OverviewComponent } from './feature/overview/overview.component';
import { ProjectsComponent } from './feature/projects/projects.component';
import { AdminComponent } from './feature/admin/admin.component';
import { LoginButtonComponent } from './shared/login-button/login-button.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OverviewComponent,
    ProjectsComponent,
    AdminComponent,
    LoginButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
