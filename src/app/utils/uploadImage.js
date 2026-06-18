import { toast } from "react-toastify";

export const uploadImage = async(imageFile)=>{

    const formData = new FormData();
    formData.append("image", imageFile);
    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
      {
        method: "POST",
        body: formData,
      },
    );

    const imageResult = await response.json();

    if (imageResult.success) {
      return imageResult.data.url; 
    }

    toast.error("Image upload failed")
  }