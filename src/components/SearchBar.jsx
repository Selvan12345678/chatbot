import { useState } from 'react';

const SearchBar = ({ onSendMessage, darkMode }) => {
  const [inputValue, setInputValue] = useState('');
  const [selectedMode, setSelectedMode] = useState('default');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    onSendMessage(inputValue, selectedMode);
    setInputValue('');
    setIsExpanded(false);
  };

  const handleModeChange = (mode) => {
    setSelectedMode(mode);
    if (inputValue) {
      setIsExpanded(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className={`flex items-center rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} transition-all duration-300 ${isExpanded ? 'p-1' : 'p-1'}`}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setIsExpanded(e.target.value.length > 0);
          }}
          placeholder="Ask me anything..."
          className={`flex-1 border-none outline-none ${darkMode ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-gray-100 text-gray-900 placeholder-gray-500'} rounded-full py-3 px-4`}
        />
        
        <div className="flex space-x-1">
          <button
            type="button"
            onClick={() => handleModeChange('deep')}
            className={`p-2 rounded-full ${selectedMode === 'deep' ? (darkMode ? 'bg-blue-600' : 'bg-blue-500 text-white') : (darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200')} transition-colors`}
            title="Deep Research Mode"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </button>
          
          <button
            type="button"
            onClick={() => handleModeChange('think')}
            className={`p-2 rounded-full ${selectedMode === 'think' ? (darkMode ? 'bg-blue-600' : 'bg-blue-500 text-white') : (darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200')} transition-colors`}
            title="Think Mode"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </button>
          
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className={`p-2 rounded-full ${!inputValue.trim() ? (darkMode ? 'text-gray-500' : 'text-gray-400') : (darkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white')} transition-colors`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mode indicator that expands */}
      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-12 mt-2' : 'max-h-0'}`}>
        <div className={`text-xs px-3 py-1 rounded-full ${darkMode ? 'bg-gray-700 text-blue-300' : 'bg-blue-100 text-blue-600'} inline-flex items-center`}>
          {selectedMode === 'deep' && (
            <>
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              Deep Research Mode
            </>
          )}
          {selectedMode === 'think' && (
            <>
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Think Mode
            </>
          )}
          {selectedMode === 'default' && 'Standard Mode'}
        </div>
      </div>
    </form>
  );
};

export default SearchBar;