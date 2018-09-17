using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.SqlClient;
using System.Data;
using Newtonsoft.Json;
using System.IO;
using System.Reflection;

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

        public static int UpdateApprovedAssetOffer(string assetCode, DateTime endDate)
        {
            var sqlCommand = BuildEndApprovedAssetOffer_Update(assetCode, endDate);
            var result = AdoService.Update(sqlCommand);
            return result;
        }

        private static SqlCommand BuildEndApprovedAssetOffer_Update(string assetCode, DateTime endDate)
        {
            var paraEndDate = new SqlParameter("EndDate", endDate);
            var paraAssetCode = new SqlParameter("AssetCode", assetCode);
            return AdoService.BuildSqlCommand(
                "EndApprovedAssetOffer.Update",
                paraEndDate,
                paraAssetCode
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

    public class AdoTestService
    {
        public static string GetTestRead()
        {
            var sqlCommand = AdoService.BuildTest_Read();
            var dt = AdoService.Fetch(sqlCommand);
            string json = JsonConvert.SerializeObject(dt, Formatting.Indented);
            return json;
        }
    }

    public class AdoService
    {
        public static DataTable Fetch(SqlCommand sqlCommand)
        {
            DataTable result = new DataTable();
            using (var connection = new SqlConnection("data source=(local);initial catalog=OneTrust;integrated security=True;MultipleActiveResultSets=True;"))
            {
                sqlCommand.Connection = connection;
                System.Data.SqlClient.SqlDataAdapter da = new SqlDataAdapter(sqlCommand);
                da.Fill(result);
            }
            return result;
        }

        public static int Update(SqlCommand sqlCommand)
        {
            int result;
            using (var connection = new SqlConnection("data source=(local);initial catalog=OneTrust;integrated security=True;MultipleActiveResultSets=True;"))
            {
                sqlCommand.Connection = connection;
                result = sqlCommand.ExecuteNonQuery();
            }
            return result;
        }

        public static SqlCommand BuildSqlCommand(string templateName, params SqlParameter[] parameters)
        {
            SqlCommand sqlCommand = new SqlCommand();
            using (var stream = Assembly.GetExecutingAssembly().GetManifestResourceStream($"MaintainApi.SqlTemplates.{templateName}.Sql.txt"))
            {
                TextReader tr = new StreamReader(stream);
                sqlCommand.CommandText = tr.ReadToEnd();
            }

            parameters.ToList().ForEach(x => sqlCommand.Parameters.Add(x));

            return sqlCommand;
        }

        public static SqlCommand BuildTest_Read()
        {
            return BuildSqlCommand(
                "Test.Read"
            );
        }
    }
}
