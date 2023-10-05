import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WildberriesComponent } from './wildberries.component';
import { WildberriesRoutingModule } from './wildberries-routing.module';
import { SliderComponent } from './components/slider/slider.component';

@NgModule({
  declarations: [WildberriesComponent, SliderComponent],
  imports: [CommonModule, WildberriesRoutingModule],
})
export class WildberriesModule {}
