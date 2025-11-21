import axios from "axios";

export async function uploadImageToCloudinary(file: File): Promise<string> {
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`;
    const form = new FormData();
    form.append("file", file);
    form.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);

    try {
        const res = await axios.post(url, form);
        return res.data.secure_url as string;
    } catch (err: any) {
        console.error("Cloudinary upload error:", err.response?.data || err.message);
        throw new Error("Image upload failed");
    }
}