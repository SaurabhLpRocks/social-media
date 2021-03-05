import { Observable } from 'rxjs';
import { User } from '@shared/typings';
import { DashboardService } from './../dashboard.service';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsComponent implements OnInit {
  // user: User = null;

  user$: Observable<User> = this.dashboardService.selectedUser$;

  constructor(
    private dashboardService: DashboardService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    //   this.user = this.dashboardService.selectedUserSubject.value;
    //   console.log('🚀 ~ UserDetailsComponent ngOnInit', this.user);
    //   this.dashboardService.selectedUser$.subscribe(
    //     (user: User) => {
    //       this.user = user;
    //       // this.cdr.detectChanges();
    //     },
    //     (error) => {}
    //   );
  }
}
