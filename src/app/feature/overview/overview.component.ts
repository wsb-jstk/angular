import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Project } from '../projects/project-to';
import { ProjectsService } from '../projects/projects.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {
  @Output()
  selectedProjectId = new EventEmitter<number>();
  projects: Project[] = [];
  constructor(private readonly service: ProjectsService) {}

  ngOnInit(): void {
    this.service.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }
}
