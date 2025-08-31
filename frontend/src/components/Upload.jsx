import { useState, useRef } from 'react';

function Upload({ onImageUpload }) {
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    
    if (!allowedTypes.includes(file.type)) {
      setError('Please upload a valid image file (JPG, JPEG, or PNG)');
      return;
    }

    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      setError('File size must be less than 10MB');
      return;
    }

    setError(null); // Clear any previous errors
    onImageUpload(file);
  };

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onButtonClick();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 animate-fadeIn">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          🌿 Leafify
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          AI-Powered Plant Disease Detection
        </p>
        <p className="text-gray-500">
          Upload a leaf image to get instant disease diagnosis
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-8 animate-slideUp">
        <div
          className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors cursor-pointer ${
            dragActive 
              ? 'border-green-500 bg-green-50' 
              : 'border-gray-300 hover:border-green-400 hover:bg-gray-50'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={onButtonClick}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="button"
          aria-label="Upload plant leaf image"
        >
          <div className="mb-6">
            <svg 
              className="mx-auto h-16 w-16 text-gray-400"
              stroke="currentColor" 
              fill="none" 
              viewBox="0 0 48 48"
            >
              <path 
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </svg>
          </div>
          
          <div className="mb-4">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Drop your leaf image here
            </h3>
            <p className="text-gray-500">
              or click to browse files
            </p>
          </div>
          
          <button
            type="button"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            onClick={onButtonClick}
          >
            Choose File
          </button>
          
          <input
            ref={inputRef}
            type="file"
            className="hidden"
            accept="image/jpeg,image/jpg,image/png"
            onChange={handleChange}
          />
        </div>
        
        <div className="mt-6 text-sm text-gray-500">
          <p className="font-medium mb-2">📝 Tips for best results:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Use clear, well-lit photos</li>
            <li>Focus on a single leaf</li>
            <li>Avoid blurry or dark images</li>
            <li>Supported formats: JPG, JPEG, PNG</li>
          </ul>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-sm font-medium">
              {error}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Upload;
