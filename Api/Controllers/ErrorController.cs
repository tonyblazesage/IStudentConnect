using Api.Data;
using Api.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ErrorController : ControllerBase
    {
        private readonly DataContext _context;
        public ErrorController(DataContext context)
        {
            _context = context;
        }

        [Authorize]
        
        [HttpGet("auth")]
        public ActionResult<string> GetThing()
        {
            return "Secured message";
        }


        [HttpGet("not-found")]
        public ActionResult<AppUser> GetNotFound()
        {
            var result = _context.Users.Find(-1);

            if (result == null) return NotFound();

            return Ok(result);
        }

        [HttpGet("server-error")]
        public ActionResult<string> GetServerError()
        {
            var result = _context.Users.Find(-1);

            var returnResult = result.ToString();

            return returnResult;
        }

        [HttpGet("bad-request")]
        public ActionResult<string> GetBadRequest()
        {
           return BadRequest("Bad request");
        }
    }
}