import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WildberriesComponent } from './wildberries.component';
import { WildberriesRoutingModule } from './wildberries-routing.module';
import { SliderComponent } from './components/slider/slider.component';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  declarations: [WildberriesComponent, SliderComponent, ItemComponent],
  imports: [CommonModule, WildberriesRoutingModule],
})
export class WildberriesModule {}
