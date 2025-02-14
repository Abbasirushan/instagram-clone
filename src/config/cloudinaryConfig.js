import { Cloudinary } from 'cloudinary-core';

const cloudinary = new Cloudinary({
  cloud_name: 'dihhgkyxr', // Replace with your Cloudinary cloud name
  secure: true,
});

// Create the upload widget function
export const createUploadWidget = (callback) => {
  return cloudinary.createUploadWidget({
    uploadPreset: 'expertizo_hackathon_media_app', // Replace with your upload preset
  }, callback);
};

export default cloudinary; 