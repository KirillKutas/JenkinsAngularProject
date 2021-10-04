import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ApiInterceptor} from '../interceptors/http.interceptor';
import {HttpClientModule} from '@angular/common/http';
import {AppConfigInterceptor} from '../interceptors/app.config.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    /*{
      provide: APP_INITIALIZER,
      multi: true,
      deps: [AppConfigInterceptor],
      useFactory: (appConfigInterceptor: AppConfigInterceptor) => {
        return () => {
          return appConfigInterceptor.loadAppSettings();
        };
      }
    },*/
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
