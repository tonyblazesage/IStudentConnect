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


    }
}