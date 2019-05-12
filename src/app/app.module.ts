import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutounsubscribeExampleComponent } from './autounsubscribe-example/autounsubscribe-example.component';
import { SubsinkExampleComponent } from './subsink-example/subsink-example.component';
import { RxjsExampleComponent } from './rxjs-example/rxjs-example.component';
import { SubscribeArrayExampleComponent } from './subscribe-array-example/subscribe-array-example.component';
import { SubscribeEachExampleComponent } from './subscribe-each-example/subscribe-each-example.component';

@NgModule({
  declarations: [
    AppComponent,
    AutounsubscribeExampleComponent,
    SubsinkExampleComponent,
    RxjsExampleComponent,
    SubscribeArrayExampleComponent,
    SubscribeEachExampleComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    // importing material module in app module instead of importing in each component
    MatCardModule,
  ],
  // exporting material module so that all components can use
  exports: [
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
