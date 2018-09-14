using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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

        // GET: api/MarketOffer/5
        [HttpGet("{LegalEntityId}/{AssetCode}", Name = "Get")]
        public string Get(int LegalEntityId, string AssetCode)
        {
            return $"value={LegalEntityId} and {AssetCode}";
        }

        // POST: api/MarketOffer
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/MarketOffer/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
