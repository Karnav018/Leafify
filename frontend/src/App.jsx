import { useState } from 'react';
import Upload from './components/Upload';
import Loading from './components/Loading';
import Results from './components/Results';
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
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
      setCurrentState(APP_STATES.LOADING);

      // TODO: Call API endpoint /api/predict
      // For now, simulate API call
      await simulateAnalysis(imageUrl);
      
    } catch (err) {
      setError(err.message || 'Failed to analyze image. Please try again.');
      setCurrentState(APP_STATES.ERROR);
    }
  };

  // Simulate API analysis (replace with real API call later)
  const simulateAnalysis = async (imageUrl) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate occasional random errors for testing (5% chance)
        if (Math.random() < 0.05) {
          reject(new Error('Network connection failed. Please check your internet and try again.'));
          return;
        }

        // Mock successful result with comprehensive data
        const mockResult = {
          imageUrl: imageUrl,
          cropName: "Tomato",
          diseaseName: "Early Blight",
          confidence: 92,
          description: "Early blight is a common fungal disease that affects tomato plants. It typically appears as dark, concentric rings on older leaves and can spread rapidly in warm, humid conditions. The disease can significantly reduce fruit quality and yield if left untreated. It's caused by the fungus Alternaria solani and thrives in temperatures between 75-85°F with high humidity.",
          solution: `**Immediate Treatment:**
• Remove and destroy all affected leaves immediately
• Apply fungicidal spray containing chlorothalonil or copper-based compounds
• Increase air circulation around plants

**Prevention Measures:**
• Water at soil level to avoid wetting foliage  
• Apply preventive fungicide treatments every 7-14 days during humid weather
• Use disease-resistant tomato varieties when possible
• Practice proper plant spacing (3-4 feet apart)
• Mulch around plants to prevent soil splash

**Long-term Management:**
• Practice crop rotation (avoid planting tomatoes in same spot for 3-4 years)
• Remove plant debris at end of season
• Consider using drip irrigation instead of overhead watering
• Apply balanced fertilizer to maintain plant health`
        };
        setAnalysisResults(mockResult);
        setCurrentState(APP_STATES.RESULTS);
        resolve(mockResult);
      }, 2500); // 2.5 second delay - more realistic
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Main Content */}
      <main>
        {currentState === APP_STATES.UPLOAD && (
          <Upload onImageUpload={handleFileUpload} />
        )}
        
        {currentState === APP_STATES.LOADING && (
          <Loading imageUrl={uploadedImage} />
        )}
        
        {currentState === APP_STATES.RESULTS && (
          <Results 
            result={analysisResults}
            onAnalyzeAnother={handleReset}
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
  );
}

export default App;
