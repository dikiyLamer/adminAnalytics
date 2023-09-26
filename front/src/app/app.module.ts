import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SiteComponent } from './site/site.component';
import { AuthModule } from './auth/auth.module';
import { SiteModule } from './site/site.module';

@NgModule({
  declarations: [AppComponent, AuthComponent, SiteComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, SiteModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
