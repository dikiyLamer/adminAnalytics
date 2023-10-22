import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WildberriesComponent } from './wildberries.component';
import { WildberriesRoutingModule } from './wildberries-routing.module';
import { SliderComponent } from './components/slider/slider.component';
import { ItemComponent } from './components/item/item.component';
import { ItemHoverDirective } from './directives/item-hover.directive';
import { ScrollUpDirective } from 'src/app/shared/directives/scroll-up.directive';
import { QuickViewComponent } from './components/quick-view/quick-view/quick-view.component';

@NgModule({
  declarations: [
    WildberriesComponent,
    SliderComponent,
    ItemComponent,
    ItemHoverDirective,
    ScrollUpDirective,
    QuickViewComponent,
  ],
  imports: [CommonModule, WildberriesRoutingModule],
})
export class WildberriesModule {}
