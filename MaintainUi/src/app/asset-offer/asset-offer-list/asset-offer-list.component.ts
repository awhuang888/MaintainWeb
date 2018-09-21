import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AssetOffer } from '../../shared/models'
import { Subscription } from 'rxjs';
import { HttpRestService } from '../../shared/http-rest.service'

@Component({
  selector: 'app-asset-offer-list',
  templateUrl: './asset-offer-list.component.html',
  styleUrls: ['./asset-offer-list.component.css']
})
export class AssetOfferListComponent implements OnInit, OnChanges {
  @Input() legalEntityId:number;
  @Input() assetCode:string;
  assetOffers:AssetOffer[];
  subscription: Subscription;

  constructor(private httpRestService: HttpRestService) { }

  ngOnInit() {
    // console.log("In asset-offer-list Init --" + this.legalEntityId );
  }

  ngOnChanges(changes: SimpleChanges){
    // console.log("before onChanges Fetch");
    this.Fetch(this.legalEntityId, this.assetCode);
  }

  onItemUpdated(isUpdated:boolean)
  {
    // console.log("onItemUpdate --" );
    if(isUpdated)
    {
      this.ngOnChanges(null);
    }
  }

  Fetch(legalEntityId, assetCode){
    //console.log(`AssetOffer/${legalEntityId}/${assetCode}`);
    if(this.legalEntityId && this.assetCode){
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
}
