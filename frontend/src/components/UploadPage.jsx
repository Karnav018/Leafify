import { useState, useRef } from 'react';

const UploadPage = ({ onFileUpload }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef(null);

  // Accepted file types
  const acceptedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  const maxFileSize = 10 * 1024 * 1024; // 10MB

  // Validate file
  const validateFile = (file) => {
    if (!acceptedTypes.includes(file.type)) {
      throw new Error('Please upload a valid image file (JPG, JPEG, or PNG)');
    }
    if (file.size > maxFileSize) {
      throw new Error('File size must be less than 10MB');
    }
    return true;
  };

  // Handle file selection
  const handleFileSelect = (file) => {
    try {
      validateFile(file);
      onFileUpload(file);
    } catch (error) {
      alert(error.message);
    }
  };

  // Handle drag events
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  // Handle click to select file
  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileInputChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Instructions */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Upload a Plant Leaf Image
        </h2>
        <p className="text-gray-600 mb-2">
          Take a clear photo of a single leaf to identify potential diseases
        </p>
        <p className="text-sm text-gray-500">
          Supported formats: JPG, JPEG, PNG • Max size: 10MB
        </p>
      </div>

      {/* Upload Area */}
      <div
        className={`
          border-2 border-dashed rounded-xl p-12 text-center cursor-pointer
          transition-all duration-200 ease-in-out
          ${isDragOver 
            ? 'border-green-400 bg-green-50' 
            : 'border-gray-300 hover:border-green-400 hover:bg-green-50'
          }
        `}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
      >
        {/* Upload Icon */}
        <div className="mb-6">
          <svg 
            className="mx-auto h-16 w-16 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
            />
          </svg>
        </div>

        {/* Upload Text */}
        <div className="space-y-2">
          <p className="text-lg font-medium text-gray-700">
            Drag and drop your leaf image here
          </p>
          <p className="text-gray-500">or</p>
          <button className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            Choose File
          </button>
        </div>

        {/* Hidden file input */}
        <input
          ref={fileInputRef}
          type="file"
          accept=".jpg,.jpeg,.png"
          onChange={handleFileInputChange}
          className="hidden"
        />
      </div>

      {/* Tips */}
      <div className="mt-8 bg-blue-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">📸 Tips for Best Results</h3>
        <ul className="space-y-2 text-blue-700">
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            Use good lighting and avoid shadows
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            Capture a single leaf that fills most of the frame
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            Ensure the leaf is in focus and details are visible
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            Include both healthy and affected areas if possible
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UploadPage;
