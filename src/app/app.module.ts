import {BrowserModule} from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {createCustomElement} from '@angular/elements';
import {AppService} from './app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppService],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(AppComponent, {injector});
    customElements.define('momentum-element', el);
  }

  ngDoBootstrap() {
  }
}
