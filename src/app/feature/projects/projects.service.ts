import { Injectable } from '@angular/core';
import { delay, Observable, of, take, tap } from 'rxjs';
import { Project } from './project-to';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor() {}
  data: Project[] = [
    {
      id: 1,
      name: 'WSB - Front',
      description: 'Zajęcia frontendowe',
      time: 0,
    },
    {
      id: 2,
      name: 'WSB - Backend',
      description: 'Zajęcia backendowe',
      time: 0,
    },
    {
      id: 3,
      name: 'WSB - Advanced',
      description: 'Kontynuacja zajęć',
      time: 0,
    },
    {
      id: 4,
      name: 'WSB - Konsultacje',
      description: 'Konsultacje na uczelni',
      time: 0,
    },
  ];
  getProjects(): Observable<Project[]> {
    return of(this.data).pipe(delay(2000), take(1));
  }
  getProject(id: number): Observable<Project> {
    return of(this.data.filter((el) => el.id === id)[0]).pipe(
      delay(2000),
      take(1)
    );
  }
  saveProject(project: Project) {
    return of({}).pipe(
      delay(2000),
      tap(() => {
        this.data = this.data.map(
          (el: Project): Project => (el.id === project.id ? project : el)
        );
      }),
      take(1)
    );
  }
  commitTime(projectId: number, time: number) {
    return of({}).pipe(
      delay(2000),
      tap(() => {
        this.data = this.data.map((el: Project): Project => (el.id === projectId) ?({...el, time:el.time + time }) :  el);
      }),
      take(1)
    );
  }
}
