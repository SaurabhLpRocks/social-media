import { DashboardService } from './../dashboard.service';
import { User } from '@shared/typings';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent implements OnInit {
  @Input('users-list') users: User[];
  selectedUser: User = null;
  constructor(
    private dashboardService: DashboardService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  userSelected(user: User) {
    this.dashboardService.selectedUserSubject.next(user);
    console.log(
      '🚀 ~ users-list.component.ts ',
      this.dashboardService.selectedUserSubject.value
    );

    // this.cdr.markForCheck();
  }
}
