import { ShortInterceptor } from './services/short.interceptor';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShortUrlComponent } from './components/short-url/short-url.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ShortUrlComponent,
    SpinnerComponent
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],

  providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ShortInterceptor,
    multi: true
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }
