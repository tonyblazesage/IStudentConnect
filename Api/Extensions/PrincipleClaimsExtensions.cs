using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Api.Extensions
{
    public static class PrincipleClaimsExtensions
    {

        //static extension method to get the user's username from the token which the Api uses to authenticate 
        public static string GetUsername(this ClaimsPrincipal user)
        {
            return user.FindFirst(ClaimTypes.NameIdentifier)?.Value;       
        }
    }
}