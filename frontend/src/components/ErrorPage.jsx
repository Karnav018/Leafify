const ErrorPage = ({ error, onRetry, onReset }) => {
  // Determine error type and appropriate messaging
  const getErrorInfo = (errorMessage) => {
    const message = errorMessage?.toLowerCase() || '';
    
    if (message.includes('network') || message.includes('connection')) {
      return {
        title: 'Connection Error',
        icon: '🌐',
        description: 'Unable to connect to our servers. Please check your internet connection.',
        suggestions: [
          'Check your internet connection',
          'Try refreshing the page',
          'Contact support if the problem persists'
        ]
      };
    }
    
    if (message.includes('file') || message.includes('format') || message.includes('upload')) {
      return {
        title: 'File Upload Error',
        icon: '📁',
        description: 'There was a problem with your uploaded file.',
        suggestions: [
          'Make sure the file is a JPG, JPEG, or PNG image',
          'Ensure the file size is under 10MB',
          'Try uploading a different image'
        ]
      };
    }
    
    if (message.includes('server') || message.includes('internal')) {
      return {
        title: 'Server Error',
        icon: '⚙️',
        description: 'Our servers are experiencing issues. Please try again in a moment.',
        suggestions: [
          'Wait a few minutes and try again',
          'The issue is on our end, not yours',
          'Contact support if this continues'
        ]
      };
    }
    
    // Generic error
    return {
      title: 'Something Went Wrong',
      icon: '❌',
      description: 'An unexpected error occurred while processing your request.',
      suggestions: [
        'Try uploading your image again',
        'Refresh the page and start over',
        'Contact support if the problem continues'
      ]
    };
  };

  const errorInfo = getErrorInfo(error);

  return (
    <div className="max-w-2xl mx-auto text-center">
      {/* Error Icon and Title */}
      <div className="mb-8">
        <div className="text-6xl mb-4">{errorInfo.icon}</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {errorInfo.title}
        </h2>
        <p className="text-gray-600">
          {errorInfo.description}
        </p>
      </div>

      {/* Error Details */}
      {error && (
        <div className="mb-8 p-4 bg-red-50 rounded-lg border border-red-200">
          <p className="text-sm text-red-700 font-mono">
            {error}
          </p>
        </div>
      )}

      {/* Suggestions */}
      <div className="mb-8 bg-blue-50 rounded-lg p-6 text-left">
        <h3 className="text-lg font-semibold text-blue-800 mb-3">
          💡 What you can try:
        </h3>
        <ul className="space-y-2">
          {errorInfo.suggestions.map((suggestion, index) => (
            <li key={index} className="flex items-start text-blue-700">
              <span className="text-blue-500 mr-2 flex-shrink-0">•</span>
              <span className="text-sm">{suggestion}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {onRetry && (
          <button
            onClick={onRetry}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
          >
            Try Again
          </button>
        )}
        
        <button
          onClick={onReset}
          className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
        >
          Start Over
        </button>
      </div>

      {/* Support Contact */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          <span className="font-medium">Still having trouble?</span> 
          <br />
          Contact our support team at{' '}
          <a 
            href="mailto:support@leafify.com" 
            className="text-green-600 hover:text-green-700 underline"
          >
            support@leafify.com
          </a>
        </p>
      </div>

      {/* Error Code for Support */}
      <div className="mt-4">
        <p className="text-xs text-gray-400">
          Error Code: ERR_{Date.now().toString().slice(-6)}
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
