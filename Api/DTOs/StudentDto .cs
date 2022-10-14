namespace Api.DTOs
{
    public class StudentDto 
    {
        public int Id { get; set; }

        public string username { get; set; }

        public string PhotoUrl { get; set; }

        public string Firstname { get; set; }

        public string LastName { get; set; }

        public int Age { get; set; }

        public DateTime Created { get; set; } 

        public DateTime LastActive { get; set; }

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

        public ICollection<PhotoDto> Photos { get; set; }

        public string StudentId { get; set; }
    }
}