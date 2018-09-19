import { Component, OnInit, Input } from '@angular/core';
import { AssetOffer } from '../../shared/models'

@Component({
  selector: '[app-asset-offer-item]',
  templateUrl: './asset-offer-item.component.html',
  styleUrls: ['./asset-offer-item.component.css']
})
export class AssetOfferItemComponent implements OnInit {
  @Input('app-asset-offer-item') assetOffer: AssetOffer;
  @Input('itemIndex') index: number;

  ngOnInit() {
  }

}
