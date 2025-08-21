const Message = ({ message, darkMode }) => {
  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-3/4 lg:max-w-1/2 rounded-lg p-4 ${message.sender === 'user' ? (darkMode ? 'bg-blue-600' : 'bg-blue-500 text-white') : (darkMode ? 'bg-gray-700' : 'bg-white border border-gray-200')}`}>
        <div className="whitespace-pre-wrap">{message.text}</div>
        
        {/* Citations */}
        {message.citations && message.citations.length > 0 && (
          <div className={`mt-2 pt-2 border-t ${message.sender === 'user' ? (darkMode ? 'border-blue-500' : 'border-blue-300') : (darkMode ? 'border-gray-600' : 'border-gray-200')}`}>
            <div className="text-xs font-semibold mb-1">Sources:</div>
            <div className="space-y-1">
              {message.citations.map((citation) => (
                <a 
                  key={citation.id} 
                  href={citation.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`text-xs block px-2 py-1 rounded ${darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-gray-100 hover:bg-gray-200'} hover:underline`}
                >
                  {citation.title}
                </a>
              ))}
            </div>
          </div>
        )}
        
        <div className={`text-xs mt-2 text-right ${message.sender === 'user' ? (darkMode ? 'text-blue-200' : 'text-blue-100') : (darkMode ? 'text-gray-400' : 'text-gray-500')}`}>
          {formatTime(message.timestamp)}
        </div>
      </div>
    </div>
  );
};

export default Message;