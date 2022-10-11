namespace API.Errors
{
    public class ApiErrorException
    {
        public ApiErrorException(int statusCode, string message = null, string information = null)
        {
            StatusCode = statusCode;
            Message = message;
            Information = information;
        }

        public int StatusCode { get; set; }

        public string Message { get; set; }

        public string Information { get; set; }
    }
}