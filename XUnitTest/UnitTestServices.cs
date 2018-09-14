using System;
using System.Collections.Generic;
using System.Data;
using Xunit;
using MaintainApi.Services;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace XUnitTest
{
    public class UnitTestServices
    {
        [Fact]
        public void Test_ApprovedGetMarketOffer()
        {
            var result = AssetOfferService.GetApprovedAssetOffer(1013726,"IRU");
            var dataTable = (DataTable)JsonConvert.DeserializeObject(result, (typeof(DataTable)));
            var AssetId = Int32.Parse(dataTable.Rows[0][0].ToString());
            Assert.True(AssetId>1);
        }

        [Fact]
        public void Test_AdoService_TestRead()
        {
            var result = AdoTestService.GetTestRead();
            var dataTable = (DataTable)JsonConvert.DeserializeObject(result,(typeof(DataTable)));
            var datetimeResult = DateTime.Parse(dataTable.Rows[0][0].ToString());
            Assert.Equal(DateTime.UtcNow.ToShortDateString(), datetimeResult.ToUniversalTime().ToShortDateString());
        }
    }
}

