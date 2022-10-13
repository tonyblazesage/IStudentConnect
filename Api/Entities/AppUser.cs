using Api.Extensions;

namespace Api.Entities
{
    public class AppUser
    {
        public int Id { get; set; }

        public string UserName { get; set; }

        public string Firstname { get; set; }

        public string LastName { get; set; }

        public byte[] PasswordHash { get; set; }

        public byte[] PasswordSalt { get; set; }

        public DateTime DateOfBirth { get; set; }

        public DateTime Created { get; set; } = DateTime.Now;

        public DateTime LastActive { get; set; } = DateTime.Now;

        public string Gender { get; set; }

        public string Introduction { get; set; }

        public string Interests { get; set; }

        public string Skills { get; set; }

        public string UniversityName { get; set; }

        public string Degreetype { get; set; }

        public string Course { get; set; }

        public DateTime Startdate { get; set; }

        public string CountryOfStudy { get; set; }

        public string CityOfStudy { get; set; }

        public ICollection<Photo> Photos { get; set; }

        public string StudentId { get; set; }

        public int GetAge()
        {
            return DateOfBirth.CalculateAge();
        }
    }
}