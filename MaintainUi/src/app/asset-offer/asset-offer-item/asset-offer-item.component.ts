import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AssetOffer } from '../../shared/models'
import { HttpRestService } from '../../shared/http-rest.service'
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: '[app-asset-offer-item]',
  templateUrl: './asset-offer-item.component.html',
  styleUrls: ['./asset-offer-item.component.css']
})
export class AssetOfferItemComponent implements OnInit {
  @Input('app-asset-offer-item') assetOffer: AssetOffer;
  @Input('itemIndex') index: number;
  @Output() onUpdated = new EventEmitter<boolean>();
  @ViewChild('endDateInput') inputEndDate:ElementRef;
  endDate?: Date = null;
  // defaultEndDate:Date=null;
  isEditing: boolean = false;
  disableSaveButton: boolean = true;

  ngOnInit() {
    console.log("In asset-offer-item   --- " + this.assetOffer.legalEntityId);
  }

  onSelectEndDate() {
    if (this.endDate != this.assetOffer.endDate) {
      this.disableSaveButton = false;
    }
  }

  constructor(
    private httpRestService: HttpRestService, 
    private confirmationService: ConfirmationService,
    private datePipe: DatePipe) {
  }

  onClickActivateOffer() {
    this.confirmationService.confirm({
      message: 'EndDate will be set to null value, are you sure that you want to perform this action?',
      accept: () => {
        this.Save(this.assetOffer.legalEntityId, this.assetOffer.assetCode, null);
      }
    });
  }

  onClickUpdateEndDate() {
    // console.log("this.assetOffer.endDate --" + this.assetOffer.endDate);
    // this.defaultEndDate = this.assetOffer.endDate;
    this.isEditing = true;
  }

  onClickDeactivateOffer() {
    this.isEditing = true;
  }

  onClickSave() {
    this.Save(this.assetOffer.legalEntityId, this.assetOffer.assetCode, this.endDate);
  }

  onClickCancel() {
    this.isEditing = false;
    this.disableSaveButton = true;
    this.endDate = null;
  }

  Save(legalEntityId: number, assetCode: string, endDate: Date) {
    let endDateString : string = endDate === null ? "null": this.datePipe.transform(endDate, "yyyy-MM-dd");
    console.log("endDateString"+endDateString + "  --endDate:"+ endDate);
    this.httpRestService.AddUpdateDataRecord(`AssetOffer/${legalEntityId}/${assetCode}`, endDateString).subscribe(
      // the first argument is a function which runs on success
      data => {
        this.isEditing = false;
        this.disableSaveButton = true;
        // console.log("before emitting");
        this.onUpdated.emit(true);
        // console.log("after emitting");
      },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading asset-Offer')
    );
  }
}
