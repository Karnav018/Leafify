function Loading({ imageUrl }) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-green-800 mb-8">
          Analyzing Your Plant...
        </h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Image Preview */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Uploaded Image
            </h2>
            <div className="max-w-md mx-auto border-2 border-gray-200 rounded-lg overflow-hidden">
              <img 
                src={imageUrl} 
                alt="Uploaded plant leaf" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* Loading Animation */}
          <div className="space-y-6">
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600"></div>
            </div>
            
            <div className="text-gray-600">
              <p className="text-lg font-medium mb-2">
                Our AI is analyzing your plant leaf...
              </p>
              <p className="text-sm">
                This may take a few seconds
              </p>
            </div>
            
            {/* Progress Steps */}
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-xs font-bold mb-2">
                    ✓
                  </div>
                  <span>Upload</span>
                </div>
                
                <div className="flex-1 h-1 bg-green-600 mx-2"></div>
                
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mb-2">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                  <span>Processing</span>
                </div>
                
                <div className="flex-1 h-1 bg-gray-200 mx-2"></div>
                
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 text-xs font-bold mb-2">
                    3
                  </div>
                  <span>Results</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
