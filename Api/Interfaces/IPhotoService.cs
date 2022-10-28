using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CloudinaryDotNet.Actions;

namespace Api.Services
{
    public interface IPhotoService
    {
        //Task to handle Photo upload
        Task<ImageUploadResult> AddPhotoAsync(IFormFile file);

        //task to handle photo delete using the publiId
        Task<DeletionResult> DeletePhotoAsync(string publicId);
    }
}