import React from "react";
import { X } from "lucide-react";
import { Button } from "../ui/button";

type TImangePreviewer = {
  setImageFiles: React.Dispatch<React.SetStateAction<File[]>>;
  imagePreview: string[];
  setImagePreview: React.Dispatch<React.SetStateAction<string[]>>;
  className?: string;
};

const ImagePreviewer = ({
  setImageFiles,
  imagePreview,
  setImagePreview,
  className,
}: TImangePreviewer) => {
  const handleRemove = (index: number) => {
    setImageFiles((prev) => prev.filter((_, idx) => idx !== index));
    setImagePreview((prev) => prev.filter((_, idx) => idx !== index));
  };

  return (
    <div className={className}>
      {imagePreview.map((preview, index) => (
        <div
          key={index}
          className="relative w-10 h-10 rounded-md overflow-hidden border border-dashed border-gray-300"
        >
          <img
            src={preview}
            alt={`Preview ${index + 1}`}
            className="object-cover w-full h-full"
          />
          <Button
            type="button"
            size="sm"
            onClick={() => handleRemove(index)}
            className="bg-red-300 hover:bg-red-400 absolute -top-0 -right-0 w-4 h-4 p-0 rounded-full"
          >
            <X className="w-2 h-2" />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ImagePreviewer;