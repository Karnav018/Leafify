function Results({ result, onAnalyzeAnother }) {
  return (
    <div className="max-w-6xl mx-auto p-6 animate-fadeIn">
      {/* Success Header with Animation */}
      <div className="text-center mb-8 animate-slideUp">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <span className="text-2xl">✅</span>
        </div>
        <h1 className="text-3xl font-bold text-green-800 mb-2">
          Analysis Complete!
        </h1>
        <p className="text-gray-600">
          Here's what we found about your plant
        </p>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-6 animate-slideUp">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Original Image */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Uploaded Image
            </h2>
            <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
              <img 
                src={result.imageUrl} 
                alt="Uploaded plant leaf" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          {/* Results */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Diagnosis Details
            </h2>
            
            {/* Crop Name */}
            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-medium text-amber-800 mb-2">Crop Type:</h3>
              <p className="text-lg font-semibold text-amber-900">
                {result.cropName}
              </p>
            </div>
            
            {/* Disease Name */}
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="font-medium text-red-800 mb-2">Disease Detected:</h3>
              <p className="text-lg font-semibold text-red-900">
                {result.diseaseName}
              </p>
            </div>
            
            {/* Confidence Score */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-800 mb-2">Confidence Score:</h3>
              <div className="flex items-center">
                <div className="flex-1 bg-gray-200 rounded-full h-3 mr-3">
                  <div 
                    className="bg-blue-600 h-3 rounded-full transition-all duration-500" 
                    style={{ width: `${result.confidence}%` }}
                  ></div>
                </div>
                <span className="text-lg font-semibold text-blue-900">
                  {result.confidence}%
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Disease Description */}
        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Disease Description</h3>
          <p className="text-gray-700 leading-relaxed">
            {result.description}
          </p>
        </div>
        
        {/* Solution/Treatment */}
        <div className="mt-6 bg-green-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-green-800 flex items-center">
            <span className="mr-2">💊</span>
            Treatment & Solution
          </h3>
          <div className="text-gray-700 leading-relaxed prose max-w-none">
            {result.solution.split('\n').map((line, index) => {
              if (line.trim().startsWith('**') && line.trim().endsWith('**')) {
                // Section headers
                return (
                  <h4 key={index} className="font-semibold text-green-800 mt-4 mb-2 text-lg">
                    {line.replace(/\*\*/g, '')}
                  </h4>
                );
              } else if (line.trim().startsWith('•')) {
                // Bullet points
                return (
                  <div key={index} className="flex items-start mb-1">
                    <span className="text-green-600 mr-2 mt-1 flex-shrink-0">•</span>
                    <span>{line.replace('•', '').trim()}</span>
                  </div>
                );
              } else if (line.trim()) {
                // Regular text
                return (
                  <p key={index} className="mb-2">
                    {line}
                  </p>
                );
              }
              return null;
            })}
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <button
            onClick={onAnalyzeAnother}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Analyze Another Image
          </button>
        </div>
      </div>
    </div>
  );
}

export default Results;
