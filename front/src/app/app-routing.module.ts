import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { SiteComponent } from './site/site.component';
import { AuthGuard } from './shared/classes/auth.gurd';
import { OverviewComponent } from './site/overview/overview.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
  {
    path: '',
    component: SiteComponent,
    children: [
      {
        path: 'shop',
        loadChildren: () =>
          import('./site/modules/wildberries/wildberries.module').then(
            (m) => m.WildberriesModule
          ),
      },
      {
        path: 'overview',
        component: OverviewComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
