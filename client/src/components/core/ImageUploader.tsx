import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface IProps {
    setImage: React.Dispatch<React.SetStateAction<[] | File[]>>;
    setImagePreview: React.Dispatch<React.SetStateAction<[] | string[]>>;
    label?: string;
    id: string
}

const ImageUploader = ({setImage, setImagePreview, label = "Upload Image", id}: IProps) => {

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

    return (
        <div className="grid w-full items-center gap-3">
            <Label htmlFor={id}>{label}</Label>
            <Input id={id} onChange={handleSetImage} type="file" />
        </div>
    )
}

export default ImageUploader;