import { useState, useRef } from 'react';

const UploadPage = ({ onFileUpload }) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
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

  // Handle file selection with preview and progress
  const handleFileSelect = async (file) => {
    try {
      validateFile(file);
      setIsProcessing(true);
      setUploadProgress(0);
      
      // Create image preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(file);
      
      // Simulate upload progress
      for (let i = 0; i <= 100; i += 10) {
        setUploadProgress(i);
        await new Promise(resolve => setTimeout(resolve, 80));
      }
      
      setTimeout(() => {
        setIsProcessing(false);
        onFileUpload(file);
      }, 300);
      
    } catch (error) {
      setIsProcessing(false);
      setImagePreview(null);
      alert(error.message);
    }
  };

  // Reset preview
  const resetPreview = () => {
    setImagePreview(null);
    setIsProcessing(false);
    setUploadProgress(0);
    if (fileInputRef.current) fileInputRef.current.value = '';
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
    if (!isProcessing && !imagePreview) {
      fileInputRef.current?.click();
    }
  };

  const handleFileInputChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          🌿 Plant Disease Detection
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          Upload a clear photo of a plant leaf to identify potential diseases
        </p>
        <p className="text-sm text-gray-500">
          Supported formats: JPG, JPEG, PNG • Max size: 10MB
        </p>
      </div>

      {/* Main Upload Area */}
      {!imagePreview ? (
        <div
          className={`
            relative border-2 border-dashed rounded-2xl p-16 text-center cursor-pointer
            transition-all duration-300 ease-in-out transform
            ${isDragOver 
              ? 'border-green-400 bg-green-50 scale-105 shadow-lg' 
              : 'border-gray-300 hover:border-green-400 hover:bg-green-50 hover:scale-102'
            }
            ${isProcessing ? 'pointer-events-none opacity-50' : ''}
          `}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={handleClick}
        >
          {/* Animated Background */}
          <div className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
            isDragOver ? 'bg-gradient-to-br from-green-50 to-green-100' : ''
          }`}></div>
          
          <div className="relative z-10">
            {/* Upload Icon */}
            <div className="mb-8">
              <div className={`mx-auto w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 ${
                isDragOver ? 'bg-green-200' : 'bg-gray-100'
              }`}>
                <svg 
                  className={`w-12 h-12 transition-all duration-300 ${
                    isDragOver ? 'text-green-600 scale-110' : 'text-gray-400'
                  }`}
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
            </div>

            {/* Upload Text */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-800">
                {isDragOver ? 'Drop your image here!' : 'Drag and drop your leaf image'}
              </h3>
              <p className="text-gray-500 text-lg">or</p>
              <button 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 text-lg font-medium"
                disabled={isProcessing}
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                {isProcessing ? 'Processing...' : 'Choose File'}
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
        </div>
      ) : (
        // Enhanced Image Preview Section
        <div className="space-y-6">
          {/* Preview Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">Image Preview</h3>
                </div>
                <button
                  onClick={resetPreview}
                  className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-200"
                  title="Remove image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src={imagePreview} 
                  alt="Leaf preview" 
                  className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105"
                />
                {isProcessing && (
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="relative w-16 h-16 mx-auto mb-4">
                        <div className="absolute inset-0 border-4 border-white border-opacity-20 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                      </div>
                      <p className="text-lg font-medium">Processing Image...</p>
                      <p className="text-sm opacity-75">{uploadProgress}% complete</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Enhanced Progress Bar */}
            {isProcessing && (
              <div className="px-8 pb-8">
                <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${uploadProgress}%` }}
                  >
                    <div className="absolute inset-0 bg-white bg-opacity-20 animate-pulse"></div>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-600 mt-2">Preparing image for analysis...</p>
              </div>
            )}
          </div>
          
          {/* Enhanced Action Buttons */}
          {!isProcessing && (
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center">
              <button
                onClick={resetPreview}
                className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 font-medium"
              >
                Choose Different Image
              </button>
              <button
                onClick={() => onFileUpload(fileInputRef.current.files[0])}
                className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl font-medium"
              >
                🔍 Analyze This Image
              </button>
            </div>
          )}
        </div>
      )}

      {/* Enhanced Tips Section */}
      <div className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-2xl">💡</span>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Tips for Best Results</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold">•</span>
                <span className="text-blue-800">Use good lighting and avoid shadows</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold">•</span>
                <span className="text-blue-800">Capture a single leaf that fills the frame</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold">•</span>
                <span className="text-blue-800">Ensure the leaf is in focus and clear</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-blue-600 font-bold">•</span>
                <span className="text-blue-800">Include both healthy and affected areas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
