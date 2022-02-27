import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MockInterceptor } from './mock/mock.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionService } from "./services/collection.service";
import { MockPermissionsGuard } from "./guards/permissions.guard";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    CollectionService,
    MockPermissionsGuard,
    { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
