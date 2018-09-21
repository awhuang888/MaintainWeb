import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { stringify } from 'querystring';


@Component({
  selector: 'app-asset-offer-toolbar',
  templateUrl: './asset-offer-toolbar.component.html',
  styleUrls: ['./asset-offer-toolbar.component.css']
})
export class AssetOfferToolbarComponent implements OnInit {
  @Output() ClickSearch = new EventEmitter<object>();
 legalEntityId:number = 1013726;
 assetCode:string;


 investmentVehicles: SelectItem[];
  constructor() { 
    this.investmentVehicles = [
      {label: 'Aon', value: 1013726, icon: 'fa fa-fw fa-cc-paypal'},
      {label: 'Csf', value: 1005447, icon: 'fa fa-fw fa-cc-visa'},
  ];
  }

  ngOnInit() {
  }

  onClickSearch(){
    console.log("before click")
    this.ClickSearch.emit({legalEntityId:this.legalEntityId, assetCode: this.assetCode});
  }

  onOptionClick(event){
    //this.legalEntityId = event.option.value;
    console.log("this.legalEntityId --- " + this.legalEntityId);
  }

}
