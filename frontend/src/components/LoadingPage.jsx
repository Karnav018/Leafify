const LoadingPage = ({ uploadedImage }) => {
  return (
    <div className="max-w-2xl mx-auto text-center">
      {/* Loading Header */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Analyzing Your Plant
      </h2>

      {/* Uploaded Image Preview */}
      {uploadedImage && (
        <div className="mb-8">
          <div className="inline-block p-2 bg-white rounded-lg shadow-md">
            <img
              src={URL.createObjectURL(uploadedImage)}
              alt="Uploaded leaf"
              className="w-64 h-64 object-cover rounded-lg"
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {uploadedImage.name}
          </p>
        </div>
      )}

      {/* Loading Animation */}
      <div className="mb-8">
        {/* Spinning leaf icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-4">
          <div className="animate-spin">
            <svg className="w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L19 8L17 7V9C17 10.1 17.9 11 19 11C20.1 11 21 10.1 21 9ZM3.5 7C2.7 7 2 6.3 2 5.5S2.7 4 3.5 4 5 4.7 5 5.5 4.3 7 3.5 7ZM7.5 22C6.7 22 6 21.3 6 20.5S6.7 19 7.5 19 9 19.7 9 20.5 8.3 22 7.5 22ZM16.5 22C15.7 22 15 21.3 15 20.5S15.7 19 16.5 19 18 19.7 18 20.5 17.3 22 16.5 22ZM20.5 17C19.7 17 19 16.3 19 15.5S19.7 14 20.5 14 22 14.7 22 15.5 21.3 17 20.5 17ZM3.5 17C2.7 17 2 16.3 2 15.5S2.7 14 3.5 14 5 14.7 5 15.5 4.3 17 3.5 17Z"/>
            </svg>
          </div>
        </div>

        {/* Loading text */}
        <div className="space-y-2">
          <p className="text-lg font-medium text-gray-700">
            AI is examining your plant...
          </p>
          <p className="text-gray-500">
            This usually takes a few seconds
          </p>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="space-y-4">
          <div className="flex items-center text-green-600">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-sm font-medium">Image uploaded successfully</span>
          </div>

          <div className="flex items-center text-green-600">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
            </div>
            <span className="text-sm font-medium">Processing with AI model...</span>
          </div>

          <div className="flex items-center text-gray-400">
            <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mr-3">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>
            <span className="text-sm">Generating results</span>
          </div>
        </div>
      </div>

      {/* Fun fact while waiting */}
      <div className="mt-8 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
        <p className="text-sm text-emerald-700">
          <span className="font-semibold">💡 Did you know?</span> Plant diseases cause 20-40% of global crop losses annually. 
          Early detection can save entire harvests!
        </p>
      </div>
    </div>
  );
};

export default LoadingPage;
