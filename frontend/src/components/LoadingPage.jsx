import { useState, useEffect } from 'react';

const LoadingPage = ({ uploadedImage }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [facts, setFacts] = useState(0);

  const steps = [
    { icon: '📤', title: 'Uploading Image', description: 'Securely transferring your image...' },
    { icon: '🔍', title: 'Analyzing Leaf Structure', description: 'Examining leaf patterns and textures...' },
    { icon: '🧠', title: 'AI Processing', description: 'Running deep learning algorithms...' },
    { icon: '📊', title: 'Comparing Patterns', description: 'Matching against disease database...' },
    { icon: '✅', title: 'Generating Results', description: 'Preparing your comprehensive report...' }
  ];

  const plantFacts = [
    "🌱 There are over 300,000 known plant species worldwide",
    "🍃 Plants produce 98% of the oxygen we breathe",
    "🌿 Some plant diseases can spread through air, water, or insects",
    "🔬 AI can identify plant diseases with over 95% accuracy",
    "🌾 Early disease detection can save entire crops",
    "🌳 Plants have been on Earth for over 400 million years",
    "🌺 Some plants can communicate with each other through chemical signals"
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev < steps.length - 1) {
          return prev + 1;
        }
        clearInterval(stepInterval);
        return prev;
      });
    }, 2000);

    const factInterval = setInterval(() => {
      setFacts(prev => (prev + 1) % plantFacts.length);
    }, 3000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
      clearInterval(factInterval);
    };
  }, [plantFacts.length, steps.length]);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full mb-6 shadow-lg">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          🔬 Analyzing Your Plant
        </h1>
        <p className="text-xl text-gray-600">
          Our AI is examining your leaf for potential diseases...
        </p>
      </div>

      {/* Image Preview */}
      {uploadedImage && (
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={URL.createObjectURL(uploadedImage)}
                alt="Analyzing leaf"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent"></div>
              
              {/* Scanning Animation */}
              <div className="absolute inset-0">
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-ping absolute top-0"></div>
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-ping absolute top-10"></div>
                <div className="w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-ping absolute top-20"></div>
              </div>
              
              {/* Corner Markers */}
              <div className="absolute top-4 left-4 w-6 h-6 border-l-4 border-t-4 border-green-400 animate-pulse"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-r-4 border-t-4 border-green-400 animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-l-4 border-b-4 border-green-400 animate-pulse"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r-4 border-b-4 border-green-400 animate-pulse"></div>
            </div>
          </div>
        </div>
      )}

      {/* Progress Section */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        {/* Overall Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-lg font-semibold text-gray-700">Analysis Progress</span>
            <span className="text-lg font-bold text-green-600">{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full transition-all duration-500 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white bg-opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>

        {/* Processing Steps */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Processing Steps</h3>
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-500 ${
                index <= currentStep 
                  ? 'bg-green-50 border-2 border-green-200' 
                  : 'bg-gray-50 border-2 border-gray-200'
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all duration-500 ${
                index < currentStep 
                  ? 'bg-green-500 text-white' 
                  : index === currentStep 
                    ? 'bg-green-400 text-white animate-pulse' 
                    : 'bg-gray-300'
              }`}>
                {index < currentStep ? '✅' : step.icon}
              </div>
              <div className="flex-1">
                <h4 className={`font-semibold transition-colors duration-500 ${
                  index <= currentStep ? 'text-green-800' : 'text-gray-500'
                }`}>
                  {step.title}
                </h4>
                <p className={`text-sm transition-colors duration-500 ${
                  index <= currentStep ? 'text-green-600' : 'text-gray-400'
                }`}>
                  {step.description}
                </p>
              </div>
              {index === currentStep && (
                <div className="w-6 h-6 border-2 border-green-500 border-t-transparent rounded-full animate-spin"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Fun Facts Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8 border border-blue-200">
        <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
          <span className="mr-3">💡</span>
          Did You Know?
        </h3>
        <div className="relative h-16 overflow-hidden">
          <div 
            className="absolute inset-0 transition-transform duration-500 ease-in-out flex items-center"
            style={{ transform: `translateY(-${facts * 100}%)` }}
          >
            {plantFacts.map((fact, index) => (
              <p key={index} className="text-lg text-blue-800 font-medium w-full h-16 flex items-center">
                {fact}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Details */}
      <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">What's Happening Behind the Scenes</h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
          <div className="space-y-2">
            <p>• <strong>Image Preprocessing:</strong> Enhancing contrast and removing noise</p>
            <p>• <strong>Feature Extraction:</strong> Identifying key visual patterns</p>
            <p>• <strong>Neural Network Analysis:</strong> Deep learning pattern recognition</p>
          </div>
          <div className="space-y-2">
            <p>• <strong>Database Comparison:</strong> Matching against 50,000+ disease images</p>
            <p>• <strong>Confidence Scoring:</strong> Calculating prediction accuracy</p>
            <p>• <strong>Report Generation:</strong> Compiling comprehensive results</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
