import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Project } from './project-to';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  form = this.fb.group({
    id: '',
    name: '',
    description: '',
    time: '',
  });
  form2 = this.fb.group({
    from: '',
    to: '',
  });
  constructor(
    private readonly service: ProjectsService,
    private readonly fb: FormBuilder
  ) {}

  @Input()
  set currentId(projectId: number) {
    this.service.getProject(projectId).subscribe((project) => {
      this.form.reset(project);
    });
  }
  save(): void {
    this.service.saveProject(this.form.value).subscribe();
  }
  commit(): void {
    const [toHours, toMinutes] = this.form2.get('to')?.value.split(':');
    const [fromHours, fromMinutes] = this.form2.get('from')?.value.split(':');

    const time = (toHours - fromHours) * 60 + (toMinutes - fromMinutes);
    this.service.commitTime(this.form.value.id, time).subscribe();
  }
}
