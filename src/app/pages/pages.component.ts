import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
