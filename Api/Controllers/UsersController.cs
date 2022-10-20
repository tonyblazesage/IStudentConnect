using System.Security.Claims;
using Api.Data;
using Api.DTOs;
using Api.Entities;
using Api.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly IMapper _mapper;

        private readonly IUserRepo _userRepo;
        public UsersController(IUserRepo userRepo, IMapper mapper)
        {
            _mapper = mapper;
            _userRepo = userRepo;
        }


        //method to get all the users 
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StudentDto>>> GetUsers()
        {
            var users = await _userRepo.GetStudentsAsync();

            return Ok(users);
        }


        //method the get user according the username
        [HttpGet("{username}")]
        public async Task<ActionResult<StudentDto>> GetUser(string username)
        {
            
          return await _userRepo.GetStudentAsync(username);
        }

        //method to update Profile details
        [HttpPut]
        public async Task<ActionResult> UpdateProfile(ProfileUpdateDto profileUpdateDto)
        {
            //this gets the user's username from the token which the Api uses to authenticate 
            var username = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            var user = await _userRepo.GetUserByUsernameAsync(username);

            //automatically maps the updateDto parameters to the parameters of the user retrieved from the token
            _mapper.Map(profileUpdateDto, user);

            _userRepo.Update(user);

            if(await _userRepo.SaveAlAsync()) return NoContent();

            return BadRequest("User details could not be updated");
        }


    }
}