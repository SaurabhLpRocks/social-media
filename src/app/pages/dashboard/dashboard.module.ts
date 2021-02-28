import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, DashboardRoutingModule],
  declarations: [DashboardComponent],
  providers: [],
})
export class DashboardModule {}
