import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  NgHttpCachingConfig,
  NgHttpCachingModule,
  NgHttpCachingSessionStorage, NgHttpCachingStrategy
} from 'ng-http-caching';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const ngHttpCachingConfig: NgHttpCachingConfig = {
  // store: new NgHttpCachingLocalStorage(),
  // store: new NgHttpCachingSessionStorage(),
  cacheStrategy: NgHttpCachingStrategy.DISALLOW_ALL,
  lifetime: 1000 * 100 // cache expire after 10 seconds
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgHttpCachingModule.forRoot(ngHttpCachingConfig),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
