import { User } from '@shared/typings';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  users: User[] = [
    {
      createdDate: '',
      firstName: 'Komal',
      id: '1',
      lastName: 'Shivhare',
      username: 'komu',
    },
    {
      createdDate: '',
      firstName: 'Saurabh',
      id: '2',
      lastName: 'Palatkar',
      username: 'saro',
    },
  ];
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    console.log('subject', this.authService.currentUserValue);
  }
}
