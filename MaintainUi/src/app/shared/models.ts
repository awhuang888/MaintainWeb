export class AssetOffer {
    public assetId: number;
    public assetCode: string;
    public name:string;
    public legalEntityId:number;
    public assetOfferId:number;
    public startDate:Date;
    public endDate?:Date ;
    public legalEntityAccountTypeId?: number;
}
