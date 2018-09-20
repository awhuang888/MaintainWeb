import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpRestService } from '../shared/http-rest.service'
import { AssetOffer } from '../shared/models'
import { AssetOfferListComponent } from './asset-offer-list/asset-offer-list.component'

@Component({
  selector: 'app-asset-offer',
  templateUrl: './asset-offer.component.html',
  styleUrls: ['./asset-offer.component.css']
})
export class AssetOfferComponent implements OnInit {
  legalEntityId: number;
  assetCode: string;

  constructor(private httpRestService: HttpRestService) {
  }

  ngOnInit() {
    this.legalEntityId = 1013726;
    this.assetCode = 'TLS';
  }

  onClickSearch(searchPara: { legalEntityId: number, assetCode: string }) {
    this.legalEntityId = searchPara.legalEntityId;
    this.assetCode = searchPara.assetCode;
    console.log("asset-offer -> onClickSearch--" + this.legalEntityId + "---" + this.assetCode);
  }
}
