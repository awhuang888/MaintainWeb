import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';


@Component({
  selector: 'app-asset-offer-toolbar',
  templateUrl: './asset-offer-toolbar.component.html',
  styleUrls: ['./asset-offer-toolbar.component.css']
})
export class AssetOfferToolbarComponent implements OnInit {
  @Output() ClickSearch = new EventEmitter<object>();
 _legalEntityId:number;
 _assetCode:string;

  constructor() { }

  ngOnInit() {
  }

  onClickSearch(){
    console.log("before click")
    this.ClickSearch.emit({legalEntityId:this._legalEntityId, assetCode: this._assetCode});
  }

}
