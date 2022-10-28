using System.Security.Claims;
using Api.Data;
using Api.DTOs;
using Api.Entities;
using Api.Extensions;
using Api.Interfaces;
using Api.Services;
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
        private readonly IPhotoService _photoService;
        public UsersController(IUserRepo userRepo, IMapper mapper, IPhotoService photoService)
        {
            _photoService = photoService;
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
            var user = await _userRepo.GetUserByUsernameAsync(User.GetUsername());

            //automatically maps the updateDto parameters to the parameters of the user retrieved from the token
            _mapper.Map(profileUpdateDto, user);

            _userRepo.Update(user);

            if(await _userRepo.SaveAlAsync()) return NoContent();

            return BadRequest("User details could not be updated");
        }


        [HttpPost("upload-photo")]
        
        public async Task<ActionResult<PhotoDto>> UploadPhoto(IFormFile file)
        {
            var user = await _userRepo.GetUserByUsernameAsync(User.GetUsername()); 

            var addPhotoresult = await _photoService.AddPhotoAsync(file);

            //check to see if there is an error and return a badrequest with the error message
            if(addPhotoresult.Error != null) return BadRequest(addPhotoresult.Error.Message);

            //next action to take if there are no errors is to excute the logic to add new photo
            var newPhoto = new Photo 
            {
                Url = addPhotoresult.SecureUrl.AbsoluteUri,
                PublicId = addPhotoresult.PublicId
            };

            //check if user has an exisiting photo

            if(user.Photos.Count == 0)
            {
                newPhoto.IsMain = true;
            }
            
            user.Photos.Add(newPhoto);

            if(await _userRepo.SaveAlAsync())
                return _mapper.Map<PhotoDto>(newPhoto);

            return BadRequest("Photo upload failed");
        
        }


    }
}