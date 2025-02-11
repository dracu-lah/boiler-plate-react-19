import { Image } from "lucide-react";
import { useCroppedImage } from "./useCroppedImage";
import { toast } from "sonner";

const DropZone = ({ onDrop }) => {
  const { aspect, uploadLimit } = useCroppedImage(); // uploadLimit is in MB

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      const fileSizeInMB = file.size / (1024 * 1024); // Convert bytes to MB
      if (fileSizeInMB > uploadLimit) {
        toast.error(`File exceeds the upload limit of ${uploadLimit}MB`);
        return;
      }
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = () => {
          onDrop(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        toast.error("Please upload a valid image file.");
      }
    }
  };

  return (
    <div
      style={{
        position: "relative",
        padding: "12px",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
        border: "2px dashed #ccc",
        borderRadius: "8px",
      }}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {/* Size Limit Display */}
      <div
        style={{
          position: "absolute",
          top: "8px",
          left: "8px",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          color: "white",
          padding: "4px 8px",
          borderRadius: "4px",
          fontSize: "12px",
          fontFamily: "monospace",
        }}
      >
        Limit: {uploadLimit}MB
      </div>

      <Image className="opacity-[0.4]" size={64} strokeWidth={1.5} />
      <p
        style={{
          fontFamily: "monospace",
          fontSize: "20px",
          opacity: 0.4,
          fontWeight: "bold",
          userSelect: "none",
          textAlign: "center",
        }}
      >
        Drag & Drop Image or&nbsp;
        <span style={{ textDecoration: "underline" }}>Browse</span>
      </p>
    </div>
  );
};

export default DropZone;
