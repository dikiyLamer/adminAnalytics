import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SiteComponent } from './site/site.component';
import { AuthModule } from './auth/auth.module';
import { SiteModule } from './site/site.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './shared/classes/token.interceptor';

@NgModule({
  declarations: [AppComponent, AuthComponent, SiteComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    SiteModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: TokenInterceptor,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
