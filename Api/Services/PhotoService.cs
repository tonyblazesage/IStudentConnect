using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Helpers;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;
using Microsoft.Extensions.Options;

namespace Api.Services
{
    public class PhotoService : IPhotoService
    {
        private readonly Cloudinary _cloduinary;
        public PhotoService(IOptions<CloudinarySettings> cloudinaryConfig )
        {
            var account = new Account(
                cloudinaryConfig.Value.CloudName,
                cloudinaryConfig.Value.ApiKey,
                cloudinaryConfig.Value.ApiSecret
            );

            _cloduinary = new Cloudinary(account);
        }

        public async Task<ImageUploadResult> AddPhotoAsync(IFormFile file)
        {
            var uploadResult = new ImageUploadResult();

            //condition to check if file to be uploaded is greater than 0
            if(file.Length > 0)
            {
                using var stream = file.OpenReadStream();
                var uploadParams = new ImageUploadParams
                {
                    File = new FileDescription(file.FileName, stream),
                    //property to transform the image into a rounded image. for square images, check cloudinary .net documentation
                    Transformation = new Transformation().Gravity("face").Height(500).Width(500).Crop("crop").Chain()
                    .Radius("max").Chain().Width(200).Crop("scale")
                };
                uploadResult = await _cloduinary.UploadAsync(uploadParams);
            }

            return uploadResult;
        }

        public async Task<DeletionResult> DeletePhotoAsync(string publicId)
        {
            //declare a new deteltion params with a pass reference to the image publicId
            var deleteParams = new DeletionParams(publicId);

            var deleteResult = await _cloduinary.DestroyAsync(deleteParams);


            return deleteResult;
        }
    }
}