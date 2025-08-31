import { useState } from 'react';
import UploadPage from './components/UploadPage';
import LoadingPage from './components/LoadingPage';
import ResultsPage from './components/ResultsPage';
import ErrorPage from './components/ErrorPage';

// App states
const APP_STATES = {
  UPLOAD: 'upload',
  LOADING: 'loading', 
  RESULTS: 'results',
  ERROR: 'error'
};

function App() {
  const [currentState, setCurrentState] = useState(APP_STATES.UPLOAD);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [error, setError] = useState(null);

  // Handle file upload
  const handleFileUpload = async (file) => {
    try {
      setError(null);
      setUploadedImage(file);
      setCurrentState(APP_STATES.LOADING);

      // TODO: Call API endpoint /api/predict
      // For now, simulate API call
      await simulateAnalysis();
      
    } catch (err) {
      setError(err.message);
      setCurrentState(APP_STATES.ERROR);
    }
  };

  // Simulate API analysis (replace with real API call later)
  const simulateAnalysis = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Mock successful result
        const mockResult = {
          disease: "Tomato___Bacterial_spot",
          confidence: 92
        };
        setAnalysisResults(mockResult);
        setCurrentState(APP_STATES.RESULTS);
        resolve(mockResult);
      }, 3000); // 3 second delay to simulate processing
    });
  };

  // Reset to upload state
  const handleReset = () => {
    setCurrentState(APP_STATES.UPLOAD);
    setUploadedImage(null);
    setAnalysisResults(null);
    setError(null);
  };

  // Handle retry from error state
  const handleRetry = () => {
    if (uploadedImage) {
      handleFileUpload(uploadedImage);
    } else {
      handleReset();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-2">🌿 Leafify</h1>
          <p className="text-green-600 text-lg">AI-Powered Plant Disease Detection</p>
        </header>

        {/* Main Content */}
        <main>
          {currentState === APP_STATES.UPLOAD && (
            <UploadPage onFileUpload={handleFileUpload} />
          )}
          
          {currentState === APP_STATES.LOADING && (
            <LoadingPage uploadedImage={uploadedImage} />
          )}
          
          {currentState === APP_STATES.RESULTS && (
            <ResultsPage 
              uploadedImage={uploadedImage}
              results={analysisResults}
              onReset={handleReset}
            />
          )}
          
          {currentState === APP_STATES.ERROR && (
            <ErrorPage 
              error={error}
              onRetry={handleRetry}
              onReset={handleReset}
            />
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
