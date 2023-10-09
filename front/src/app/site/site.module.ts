import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StieRoutingModule } from './site-routing.module';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [OverviewComponent],
  imports: [CommonModule, StieRoutingModule],
})
export class SiteModule {}
