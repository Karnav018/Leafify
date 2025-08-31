const ResultsPage = ({ result, onNewAnalysis }) => {
  if (!result) return null;

  const confidenceColor = result.confidence >= 90 ? 'text-green-600' : 
                         result.confidence >= 70 ? 'text-yellow-600' : 'text-red-600';
  
  const confidenceBg = result.confidence >= 90 ? 'bg-green-100' : 
                      result.confidence >= 70 ? 'bg-yellow-100' : 'bg-red-100';

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-fadeIn">
      {/* Enhanced Header */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mb-6 shadow-lg animate-bounce">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          🌿 Analysis Complete
        </h1>
        <p className="text-xl text-gray-600">
          Comprehensive plant health assessment results
        </p>
      </div>

      {/* Main Results Grid */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Image Section */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <span className="mr-2">📸</span>
                Analyzed Image
              </h3>
              <div className="relative overflow-hidden rounded-xl group">
                <img 
                  src={result.imageUrl} 
                  alt="Analyzed leaf" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <div className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg ${confidenceBg} ${confidenceColor} backdrop-blur-sm`}>
                    {result.confidence}% Match
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Crop Information Card */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl shadow-lg p-6 border border-blue-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-2xl font-bold text-blue-900">Crop Identification</h3>
            </div>
            <p className="text-3xl font-bold text-blue-700 mb-2">{result.cropName}</p>
            <p className="text-blue-600">Successfully identified plant species</p>
          </div>

          {/* Disease Detection Card */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl shadow-lg p-6 border border-orange-200 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-2xl font-bold text-orange-900">Disease Analysis</h3>
            </div>
            <p className="text-3xl font-bold text-orange-700 mb-4">{result.diseaseName}</p>
            
            {/* Enhanced Confidence Meter */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-orange-600 font-semibold">Confidence Level:</span>
                <span className={`text-xl font-bold ${confidenceColor}`}>{result.confidence}%</span>
              </div>
              <div className="relative w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                <div 
                  className={`absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out ${
                    result.confidence >= 90 ? 'bg-gradient-to-r from-green-400 to-green-600' : 
                    result.confidence >= 70 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' : 
                    'bg-gradient-to-r from-red-400 to-red-600'
                  }`}
                  style={{ width: `${result.confidence}%` }}
                >
                  <div className="absolute inset-0 bg-white bg-opacity-20 animate-pulse"></div>
                </div>
              </div>
              <p className="text-sm text-orange-600">
                {result.confidence >= 90 ? 'Very High Confidence' :
                 result.confidence >= 70 ? 'High Confidence' :
                 result.confidence >= 50 ? 'Moderate Confidence' : 'Low Confidence'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Disease Description */}
      <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-purple-500 hover:shadow-2xl transition-all duration-300">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
            <span className="text-2xl">📋</span>
          </div>
          <h3 className="text-2xl font-bold text-purple-900">Disease Information</h3>
        </div>
        <div className="bg-purple-50 rounded-xl p-6">
          <p className="text-purple-800 leading-relaxed text-lg">{result.description}</p>
        </div>
      </div>

      {/* Treatment Solutions */}
      <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 rounded-2xl shadow-xl p-8 border border-green-200 hover:shadow-2xl transition-all duration-300">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
            <span className="text-2xl">💊</span>
          </div>
          <h3 className="text-2xl font-bold text-green-900">Treatment & Solutions</h3>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-green-100">
          <div className="prose prose-green max-w-none">
            {result.solution.split('\n').map((paragraph, index) => (
              paragraph.trim() && (
                <p key={index} className="text-green-800 leading-relaxed mb-4 last:mb-0 text-lg">
                  {paragraph.trim()}
                </p>
              )
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
        <button
          onClick={onNewAnalysis}
          className="group px-10 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl hover:from-green-700 hover:to-green-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold text-lg flex items-center justify-center space-x-3"
        >
          <svg className="w-6 h-6 transition-transform group-hover:rotate-180 duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>Analyze Another Image</span>
        </button>
        
        <button
          onClick={() => window.print()}
          className="px-10 py-4 border-2 border-green-600 text-green-600 rounded-2xl hover:bg-green-50 hover:border-green-700 transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-3"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          <span>Save Report</span>
        </button>

        <button
          onClick={() => {
            const data = {
              crop: result.cropName,
              disease: result.diseaseName,
              confidence: result.confidence,
              description: result.description,
              solution: result.solution,
              timestamp: new Date().toISOString()
            };
            const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `plant-analysis-${Date.now()}.json`;
            a.click();
            URL.revokeObjectURL(url);
          }}
          className="px-10 py-4 border-2 border-blue-600 text-blue-600 rounded-2xl hover:bg-blue-50 hover:border-blue-700 transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-3"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span>Export Data</span>
        </button>
      </div>

      {/* Enhanced Disclaimer */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-400 rounded-2xl p-8 shadow-lg">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold text-yellow-800 mb-3">⚠️ Important Disclaimer</h4>
            <p className="text-yellow-700 leading-relaxed text-lg">
              This AI analysis provides preliminary identification based on visual patterns. Results should be used as a 
              starting point for further investigation. For critical agricultural decisions, treatment plans, or plant health 
              management, please consult with qualified agricultural professionals, plant pathologists, or your local 
              agricultural extension service.
            </p>
            <div className="mt-4 p-4 bg-yellow-100 rounded-lg">
              <p className="text-yellow-800 font-medium text-sm">
                🏥 <strong>Emergency Plant Care:</strong> If you suspect a rapidly spreading disease that could affect your entire crop, 
                contact agricultural authorities immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
