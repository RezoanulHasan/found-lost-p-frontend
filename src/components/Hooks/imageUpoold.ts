// imageUpload.ts
"use client";
export const imageUpload = async (image: File | any): Promise<any> => {
  const formData = new FormData();
  formData.append("image", image);

  const url = `https://api.imgbb.com/1/upload?key=${
    process.env.NEXT_PUBLIC_Image_Upload_Token as string
  }`;

  const response = await fetch(url, {
    method: "POST",
    body: formData,
  });

  const data = await response.json();
  return data;
};
