using System;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
using System.Data.SqlClient;
using Newtonsoft.Json;

namespace MaintainApi.Services
{
    public class AssetOfferService
    {
        public static string GetApprovedAssetOffer(int legalEntityId, string assetCode)
        {
            var sqlCommand = BuildEndApprovedAssetOffer_Read(legalEntityId, assetCode);
            var dt = AdoService.Fetch(sqlCommand);
            string json = JsonConvert.SerializeObject(dt, Formatting.Indented);
            return json;
        }

        public static int UpdateApprovedAssetOffer(int legalEntityId, string assetCode, DateTime? endDate)
        {
            var sqlCommand = BuildEndApprovedAssetOffer_Update(legalEntityId, assetCode, endDate);
            var result = AdoService.Update(sqlCommand);
            return result;
        }

        private static SqlCommand BuildEndApprovedAssetOffer_Update(int legalEntityId, string assetCode, DateTime? endDate)
        {
            var paraEndDate = new SqlParameter("EndDate", SqlDbType.DateTime);
            paraEndDate.Value = (object)endDate ?? DBNull.Value;
            var paraAssetCode = new SqlParameter("AssetCode", assetCode);
            var paraLegalEntityId = new SqlParameter("LegalEntityId", legalEntityId);
            return AdoService.BuildSqlCommand(
                "EndApprovedAssetOffer.Update",
                paraEndDate,
                paraAssetCode,
                paraLegalEntityId
            );
        }

        private static SqlCommand BuildEndApprovedAssetOffer_Read(int legalEntityId, string assetCode)
        {
            var paraLegalEntityId = new SqlParameter("LegalEntityId", legalEntityId);
            var paraAssetCode = new SqlParameter("AssetCode", assetCode);
            return AdoService.BuildSqlCommand(
                "EndApprovedAssetOffer.Read",
                paraLegalEntityId,
                paraAssetCode
            );
        }
    }
}
