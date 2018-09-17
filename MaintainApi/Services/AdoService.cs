using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Reflection;

namespace MaintainApi.Services
{
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
}