using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MaintainApi.Services;
using Microsoft.CodeAnalysis.CSharp.Syntax;

namespace MaintainApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MarketOfferController : ControllerBase
    {
        // GET: api/MarketOffer
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/MarketOffer/1013726/TLS
        [HttpGet("{LegalEntityId}/{AssetCode}", Name = "Get")]
        public IActionResult Get(int legalEntityId, string assetCode)
        {
            try
            {
                var result = AssetOfferService.GetApprovedAssetOffer(legalEntityId, assetCode);
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // POST: api/MarketOffer
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/MarketOffer/1013726/TLS
        // [FromBody]:"2018-7-7"
        [HttpPut("{LegalEntityId}/{AssetCode}")]
        public IActionResult Put(int legalEntityId, string assetCode, [FromBody] string dateTimeString)
        {
            try
            {
                DateTime? closedDateTime = DateTime.TryParse(dateTimeString, out DateTime tDateTime)
                    ? tDateTime
                    : (DateTime?) null;
                var result = AssetOfferService.UpdateApprovedAssetOffer(legalEntityId, assetCode, closedDateTime);
               return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
