import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WildberriesComponent } from './wildberries.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WildberriesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WildberriesRoutingModule {}
