import { DashboardService } from './dashboard.service';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  imports: [CommonModule, FormsModule, DashboardRoutingModule],
  declarations: [DashboardComponent, UsersListComponent, UserDetailsComponent],
  providers: [DashboardService],
})
export class DashboardModule {}
