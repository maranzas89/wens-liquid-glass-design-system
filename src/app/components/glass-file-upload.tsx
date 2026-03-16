import React from 'react';
import { Upload, X, File } from 'lucide-react';

interface GlassFileUploadProps {
  onFileSelect: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // in MB
  className?: string;
}

export function GlassFileUpload({ 
  onFileSelect, 
  accept, 
  multiple = false,
  maxSize = 10,
  className = '' 
}: GlassFileUploadProps) {
  const [isDragging, setIsDragging] = React.useState(false);
  const [files, setFiles] = React.useState<File[]>([]);
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      handleFiles(selectedFiles);
    }
  };

  const handleFiles = (newFiles: File[]) => {
    const validFiles = newFiles.filter(file => {
      const sizeMB = file.size / (1024 * 1024);
      return sizeMB <= maxSize;
    });

    const updatedFiles = multiple ? [...files, ...validFiles] : validFiles;
    setFiles(updatedFiles);
    onFileSelect(updatedFiles);
  };

  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onFileSelect(updatedFiles);
  };

  return (
    <div className={className}>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={`
          backdrop-blur-md backdrop-saturate-150
          bg-white/10
          border-2 border-dashed border-white/20
          rounded-3xl
          p-8
          text-center
          cursor-pointer
          transition-all duration-300
          ${isDragging ? 'border-blue-400/50 bg-white/20 scale-105' : 'hover:border-white/30 hover:bg-white/15'}
        `}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleFileInput}
          className="hidden"
        />
        <Upload size={48} className="mx-auto mb-4 text-white/60" />
        <p className="text-white mb-2">
          Drag & drop files here, or click to select
        </p>
        <p className="text-white/60 text-sm">
          Maximum file size: {maxSize}MB
        </p>
      </div>

      {files.length > 0 && (
        <div className="mt-4 space-y-2">
          {files.map((file, index) => (
            <div
              key={index}
              className="
                backdrop-blur-md backdrop-saturate-150
                bg-white/10
                border border-white/20
                rounded-2xl
                p-4
                flex items-center justify-between
              "
            >
              <div className="flex items-center gap-3">
                <File className="text-white/60" size={20} />
                <div>
                  <p className="text-white text-sm">{file.name}</p>
                  <p className="text-white/60 text-xs">
                    {(file.size / 1024).toFixed(2)} KB
                  </p>
                </div>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(index);
                }}
                className="
                  text-white/60 hover:text-white
                  transition-colors duration-200
                  p-1
                "
              >
                <X size={20} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
