import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AssetOfferComponent } from './asset-offer/asset-offer.component';
import { HeaderComponent } from './header/header.component';

import { HttpRestService } from './shared/http-rest.service';
import { OtherRoutineComponent } from './other-routine/other-routine.component';

@NgModule({
  declarations: [
    AppComponent,
    AssetOfferComponent,
    HeaderComponent,
    OtherRoutineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [HttpRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
