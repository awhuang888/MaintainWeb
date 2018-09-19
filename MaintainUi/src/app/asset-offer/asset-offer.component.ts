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
  legalEntityId:number;
  assetCode:string;

  constructor(private httpRestService: HttpRestService) { 
  }

  ngOnInit() {
    console.log("before assigning legalEntityId");
    // this.GetAssetOffer(1013726, 'TLS');
    this.legalEntityId = 1013726;
    this.assetCode = 'TLS';
    console.log("after assigning legalEntityId");
  }

  // private GetAssetOffer(legalEntityId, assetCode){
  //   console.log(`AssetOffer/${legalEntityId}/${assetCode}`);
  //   this.httpRestService.getDataSet(`AssetOffer/${legalEntityId}/${assetCode}`).subscribe(
  //     // the first argument is a function which runs on success
  //     data => { this.assetOffers = data as AssetOffer[] },
  //     // the second argument is a function which runs on error
  //     err => console.error(err),
  //     // the third argument is a function which runs on completion
  //     () => console.log('done loading Account')
  //   );
  // }

}
