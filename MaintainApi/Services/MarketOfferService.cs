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
            var sqlCommand = SqlCommandBuilder.BuildEndApprovedAssetOffer_Read(legalEntityId, assetCode);
            var dt = AdoService.Fetch(sqlCommand);
            string json = JsonConvert.SerializeObject(dt, Formatting.Indented);
            return json;
        }

        public static string UpdateApprovedAssetOffer(string assetCode, DateTime endDate)
        {
            var sqlCommand = SqlCommandBuilder.BuildEndApprovedAssetOffer_Read(legalEntityId, assetCode);
            var dt = AdoService.Fetch(sqlCommand);
            string json = JsonConvert.SerializeObject(dt, Formatting.Indented);
            return json;
        }
    }

    public class AdoTestService
    {
        public static string GetTestRead()
        {
            var sqlCommand = SqlCommandBuilder.BuildTest_Read();
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
    }

    public class SqlCommandBuilder
    {
        private static SqlCommand BuildSqlCommand(string templateName, params SqlParameter[] parameters)
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

        public static SqlCommand BuildEndApprovedAssetOffer_Update(string assetCode, DateTime endDate)
        {
            var paraEndDate = new SqlParameter("EndDate", endDate);
            var paraAssetCode = new SqlParameter("AssetCode", assetCode);
            return BuildSqlCommand(
                "EndApprovedAssetOffer.Update",
                paraEndDate,
                paraAssetCode
            );
        }
    }
}
