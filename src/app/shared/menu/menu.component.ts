import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Page } from 'src/app/app.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  @Output()
  selected = new EventEmitter<Page>();
  @Input()
  currentPage!: Page;

  constructor() {}

  ngOnInit(): void {}
}
