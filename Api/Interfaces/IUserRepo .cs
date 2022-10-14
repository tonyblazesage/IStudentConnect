using Api.DTOs;
using Api.Entities;

namespace Api.Interfaces
{
    public interface IUserRepo 
    {
         void Update(AppUser user);

         Task<bool> SaveAlAsync();

         Task<IEnumerable<AppUser>> GetUsersAsync();

         Task<AppUser> GetUserByIdAsync(int id);

         Task<AppUser> GetUserByUsernameAsync( string username);

         Task <IEnumerable<StudentDto>> GetStudentsAsync();

         Task <StudentDto> GetStudentAsync(string username);
    }
}