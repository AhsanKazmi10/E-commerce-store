"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

interface UploadComponentProps {
  onImageUpload: (url: string, publicId: string) => void;  // ✅ Prop name onImageUpload
  currentImage?: string;
}

export default function UploadComponent({ onImageUpload, currentImage }: UploadComponentProps) {
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(currentImage || "");
  const [error, setError] = useState("");

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    setError("");

    const file = e.dataTransfer.files?.[0];
    if (file) {
      await uploadFile(file);
    }
  }, []);

  const handleFileSelect = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      await uploadFile(file);
    }
  }, []);

  const uploadFile = async (file: File) => {
    if (!file.type.startsWith("image/")) {
      setError("Please upload an image file");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Image must be less than 5MB");
      return;
    }

    setUploading(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setPreview(data.url);
        onImageUpload(data.url, data.publicId);  // ✅ Call the callback
      } else {
        setError(data.error || "Upload failed");
      }
    } catch (error) {
      setError("Network error. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-full">
      <div
        className={`
          relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer
          transition-all duration-200
          ${dragActive ? "border-blue-500 bg-blue-500/10" : "border-gray-600 bg-gray-900/50"}
          ${uploading ? "opacity-50 cursor-wait" : "hover:border-blue-400"}
        `}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => !uploading && document.getElementById("imageInput")?.click()}
      >
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileSelect}
          disabled={uploading}
        />

        {preview ? (
          <div className="relative w-full h-48">
            <Image
              src={preview}
              alt="Preview"
              fill
              className="object-contain rounded-lg"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                setPreview("");
                onImageUpload("", "");
              }}
              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
            >
              ×
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="text-4xl">📸</div>
            <div className="text-sm">
              {uploading ? (
                <span className="text-blue-400">Uploading...</span>
              ) : (
                <>
                  <span className="text-blue-400 font-medium">Click to upload</span>
                  {" or drag & drop"}
                </>
              )}
            </div>
            <div className="text-xs text-gray-500">
              PNG, JPG, GIF up to 5MB
            </div>
          </div>
        )}
      </div>

      {error && (
        <div className="mt-2 text-sm text-red-400 text-center">
          {error}
        </div>
      )}
    </div>
  );
}