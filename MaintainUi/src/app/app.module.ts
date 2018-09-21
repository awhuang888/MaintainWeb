import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DatePipe} from '@angular/common';

import {CalendarModule} from 'primeng/calendar';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {SelectButtonModule} from 'primeng/selectbutton';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AssetOfferComponent } from './asset-offer/asset-offer.component';
import { HeaderComponent } from './header/header.component';

import { HttpRestService } from './shared/http-rest.service';
import { OtherRoutineComponent } from './other-routine/other-routine.component';
import { AssetOfferListComponent } from './asset-offer/asset-offer-list/asset-offer-list.component';
import { AssetOfferItemComponent } from './asset-offer/asset-offer-item/asset-offer-item.component';
import { AssetOfferToolbarComponent } from './asset-offer/asset-offer-toolbar/asset-offer-toolbar.component';
import { InvestmentVehicleNamePipe } from './shared/investment-vehicle-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AssetOfferComponent,
    HeaderComponent,
    OtherRoutineComponent,
    AssetOfferListComponent,
    AssetOfferItemComponent,
    AssetOfferToolbarComponent,
    InvestmentVehicleNamePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,

    CalendarModule,
    ConfirmDialogModule,
    SelectButtonModule,
  ],
  providers: [HttpRestService, ConfirmationService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
