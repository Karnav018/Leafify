const ResultsPage = ({ uploadedImage, results, onReset }) => {
  // Format disease name for display
  const formatDiseaseName = (diseaseString) => {
    if (!diseaseString) return 'Unknown';
    
    // Remove underscores and format (e.g., "Tomato___Bacterial_spot" -> "Tomato - Bacterial Spot")
    const parts = diseaseString.split('___');
    if (parts.length === 2) {
      const plant = parts[0];
      const disease = parts[1].replace(/_/g, ' ');
      return `${plant} - ${disease}`;
    }
    
    return diseaseString.replace(/_/g, ' ');
  };

  // Get confidence color based on percentage
  const getConfidenceColor = (confidence) => {
    if (confidence >= 80) return 'text-green-600 bg-green-100';
    if (confidence >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  // Get confidence message
  const getConfidenceMessage = (confidence) => {
    if (confidence >= 90) return 'Very High Confidence';
    if (confidence >= 80) return 'High Confidence';
    if (confidence >= 70) return 'Good Confidence';
    if (confidence >= 60) return 'Moderate Confidence';
    return 'Low Confidence';
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Results Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Analysis Complete
        </h2>
        <p className="text-gray-600">
          Here's what our AI found in your plant leaf
        </p>
      </div>

      {/* Results Grid */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Original Image */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Your Uploaded Image
          </h3>
          {uploadedImage && (
            <div className="space-y-3">
              <img
                src={URL.createObjectURL(uploadedImage)}
                alt="Uploaded leaf"
                className="w-full h-64 object-cover rounded-lg border-2 border-gray-200"
              />
              <div className="text-sm text-gray-600">
                <p><span className="font-medium">File:</span> {uploadedImage.name}</p>
                <p><span className="font-medium">Size:</span> {(uploadedImage.size / 1024 / 1024).toFixed(2)} MB</p>
              </div>
            </div>
          )}
        </div>

        {/* Analysis Results */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            AI Analysis Results
          </h3>
          
          {results && (
            <div className="space-y-6">
              {/* Disease Identification */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Identified Condition
                </label>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-lg font-semibold text-gray-800">
                    {formatDiseaseName(results.disease)}
                  </p>
                </div>
              </div>

              {/* Confidence Score */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Confidence Score
                </label>
                <div className="space-y-3">
                  {/* Percentage */}
                  <div className="flex items-center justify-between">
                    <span className={`px-4 py-2 rounded-full text-lg font-bold ${getConfidenceColor(results.confidence)}`}>
                      {results.confidence}%
                    </span>
                    <span className="text-sm text-gray-600">
                      {getConfidenceMessage(results.confidence)}
                    </span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className={`h-3 rounded-full transition-all duration-500 ${
                        results.confidence >= 80 ? 'bg-green-500' :
                        results.confidence >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${results.confidence}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-700">
                  <span className="font-semibold">⚠️ Important:</span> This is an AI-based preliminary assessment. 
                  For critical decisions, please consult with agricultural experts or plant pathologists.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={onReset}
          className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
        >
          Analyze Another Image
        </button>
        
        <button
          onClick={() => window.print()}
          className="px-8 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
        >
          Save Results
        </button>
      </div>

      {/* Next Steps */}
      <div className="mt-8 bg-emerald-50 rounded-xl p-6 border border-emerald-200">
        <h4 className="text-lg font-semibold text-emerald-800 mb-3">
          🌱 Next Steps
        </h4>
        <div className="grid sm:grid-cols-2 gap-4 text-sm text-emerald-700">
          <div>
            <h5 className="font-medium mb-1">If Disease Detected:</h5>
            <ul className="space-y-1 list-disc list-inside">
              <li>Isolate affected plants</li>
              <li>Research treatment options</li>
              <li>Consult local agricultural extension</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-1">Prevention Tips:</h5>
            <ul className="space-y-1 list-disc list-inside">
              <li>Maintain proper plant spacing</li>
              <li>Ensure good air circulation</li>
              <li>Water at soil level, not leaves</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
