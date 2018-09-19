import { Component, OnInit, Input } from '@angular/core';
import { AssetOffer } from '../../shared/models'
import { Observable, Subscription } from 'rxjs';

import { HttpRestService } from '../../shared/http-rest.service'
import { AssetOfferItemComponent } from '../asset-offer-item/asset-offer-item.component'

@Component({
  selector: 'app-asset-offer-list',
  templateUrl: './asset-offer-list.component.html',
  styleUrls: ['./asset-offer-list.component.css']
})
export class AssetOfferListComponent implements OnInit {
  @Input() legalEntityId:number;
  @Input() assetCode:string;
  assetOffers:AssetOffer[];
  subscription: Subscription;

  constructor(private httpRestService: HttpRestService) { }

  ngOnInit() {
    this.Fetch(this.legalEntityId, this.assetCode);
  }

  Fetch(legalEntityId, assetCode){
    console.log(`AssetOffer/${legalEntityId}/${assetCode}`);
    this.httpRestService.getDataSet(`AssetOffer/${legalEntityId}/${assetCode}`).subscribe(
      // the first argument is a function which runs on success
      data => { this.assetOffers = data as AssetOffer[] },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading asset-Offer')
    );
  }

}
