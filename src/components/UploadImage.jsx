import React, { useState, useEffect } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";

function UploadImage() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const maxUploadSizeInBytes = 10 * 1024 * 1024; // 10MB
  const maxUploadsPerDay = 20;
  
  useEffect(() => {
    listImages();
  }, []);

  const listImages = () => {
    const imageListRef = ref(storage, "images/");
    listAll(imageListRef)
      .then((response) => {
        const imagePromises = response.items.map((item) => getDownloadURL(item));
        Promise.all(imagePromises)
          .then((urls) => {
            setImageList(urls);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const uploadImage = () => {
    if (imageUpload == null) return;

    const uploadedImagesCount = parseInt(localStorage.getItem("uploadedImagesCount")) || 0;
    const lastUploadDate = localStorage.getItem("lastUploadDate");

    if (uploadedImagesCount >= maxUploadsPerDay) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have reached the maximum uploads for today.",
		customClass: {
			container: "sweet-alert-container",
		},
      });
      return;
    }

    if (lastUploadDate && new Date(lastUploadDate).toDateString() !== new Date().toDateString()) {
      // Reset the count if it's a new day.
      localStorage.setItem("uploadedImagesCount", 0);
    }

    if (imageUpload.size > maxUploadSizeInBytes) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "The maximum size for a photo is 10MB",
		customClass: {
			container: "sweet-alert-container",
		},
      });
      return;
    }

    const imageRef = ref(storage, `images/${imageUpload.name}-${uuidv4()}`);
    uploadBytes(imageRef, imageUpload)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref)
          .then((url) => {
            setImageList((prev) => [...prev, url]);
            localStorage.setItem("uploadedImagesCount", uploadedImagesCount + 1);
            localStorage.setItem("lastUploadDate", new Date().toISOString());

            Swal.fire({
              icon: "success",
              title: "Success!",
              text: "Your image has been successfully uploaded.",
			  customClass: {
				container: "sweet-alert-container",
			},
            });
          })
          .catch((error) => {
            console.log(error);
          });
        setImageUpload(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleImageChange = (event) => {
    setImageUpload(event.target.files[0]);
  };

	return (
		<div className="flex flex-col justify-center items-center">
			<div className="text-center mb-4">
				<h1 className="text-1xl md:text-2xl md:px-10 font-bold mb-4 w-full text-white">
					Upload Your Classroom Memories
				</h1>
			</div>

			<div className="mx-auto p-4">
				<form>
					<div className="mb-4">
						<input type="file" id="imageUpload" className="hidden" onChange={handleImageChange} />
						<label
							htmlFor="imageUpload"
							className="cursor-pointer border-dashed border-2 border-gray-400 rounded-lg p-4 w-56 h-auto flex items-center justify-center">
							{imageUpload ? (
								<div className="w-full h-full overflow-hidden">
									<img
										src={URL.createObjectURL(imageUpload)}
										alt="Preview Gambar"
										className="w-full h-full object-cover"
									/>
								</div>
							) : (
								<div className="text-center px-5 py-8">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										className="h-12 w-12 mx-auto text-gray-400">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 6v6m0 0v6m0-6h6m-6 0H6"
										/>
									</svg>
									<p className="text-white opacity-60">Click to select an image</p>
								</div>
							)}
						</label>
					</div>
				</form>
			</div>

			<button
				type="button"
				className="py-2.5 w-[60%] mb-0 md:mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
				onClick={uploadImage}>
				UPLOAD
			</button>
		</div>
	)
}

export default UploadImage
