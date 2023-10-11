import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WildberriesComponent } from './wildberries.component';
import { WildberriesRoutingModule } from './wildberries-routing.module';
import { SliderComponent } from './components/slider/slider.component';
import { ItemComponent } from './components/item/item.component';
import { ItemHoverDirective } from './directives/item-hover.directive';

@NgModule({
  declarations: [WildberriesComponent, SliderComponent, ItemComponent, ItemHoverDirective],
  imports: [CommonModule, WildberriesRoutingModule],
})
export class WildberriesModule {}
