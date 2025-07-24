import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useState } from "react";
import ImagePreviewer from "./ImagePreviewer";

const ImageUploader = () => {
    const [image, setImage] = useState<File[] | []>([]);
    const [imagePreview, setImagePreview] = useState<string[] | []>([])

    const handleSetImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files![0]
        setImage((pre) => [...pre, file])

        if(file){
            const reader = new FileReader();

            reader.onloadend = () => {
                setImagePreview((prev)=> [...prev, reader.result as string])
            }
            reader.readAsDataURL(file)
        }
        event.target.value =  ""
    }

    console.log(image)

    return (
        <div className="grid w-full items-center gap-3">
            <Label htmlFor="profileImg">Profile Picture</Label>
            <Input id="profileImg" onChange={handleSetImage} type="file" />
            <ImagePreviewer setImageFiles={setImage} imagePreview={imagePreview} setImagePreview={setImagePreview} />
        </div>
    )
}

export default ImageUploader;