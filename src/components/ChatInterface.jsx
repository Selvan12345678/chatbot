import { useState, useRef, useEffect } from 'react';
import Message from './Message';
import SearchBar from './SearchBar';

const ChatInterface = ({ darkMode }) => {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [uiVariant, setUiVariant] = useState('personal'); // 'personal' or 'professional'
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (messageText, mode) => {
    const newUserMessage = {
      id: messages.length + 1,
      text: messageText,
      sender: 'user',
      timestamp: new Date(),
      citations: []
    };

    setMessages([...messages, newUserMessage]);
    setIsLoading(true);

    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: `I've processed your query in ${mode} mode. Here's what I found about "${messageText}".`,
        sender: 'bot',
        timestamp: new Date(),
        citations: [
          { id: 3, title: "React Fundamentals", url: "https://reactjs.org/docs/hello-world.html" },
          { id: 4, title: "Thinking in React", url: "https://reactjs.org/docs/thinking-in-react.html" }
        ]
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const toggleUiVariant = () => {
    setUiVariant(prev => prev === 'personal' ? 'professional' : 'personal');
  };

  return (
    <div className={`flex-1 flex flex-col overflow-y-auto mt-4  ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Chat header */}
      <div className={`p-4 border-b ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'} flex items-center`}>
        <h2 className="text-xl font-semibold">
          {uiVariant === 'personal' ? 'Chat Assistant' : 'Lavdle Kiwi AI'}
        </h2>
        <div className="ml-auto flex space-x-2">
          <button 
            onClick={toggleUiVariant}
            className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            title="Toggle UI Style"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button className={`p-2 rounded-full ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Messages container */}
      <div className="h-full ">
        {messages.length === 0 ? (
          <div className={`flex flex-col items-center justify-center h-full ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {uiVariant === 'personal' ? (
              <>
                <h1 className="text-2xl font-bold mb-2">Another late night huh, karthi?</h1>
                <p className="text-lg mb-6">How can I help you today?</p>
                
                <div className="w-full max-w-md">
                  <p className="font-medium mb-3">What do you want to know?</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className={`flex items-center p-3 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                      <input type="checkbox" id="deepsearch" className={`mr-3 ${darkMode ? 'accent-blue-400' : 'accent-blue-500'}`} />
                      <label htmlFor="deepsearch" className="font-medium">DeepSearch</label>
                    </div>
                    
                    <div className={`flex items-center p-3 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                      <input type="checkbox" id="document" className={`mr-3 ${darkMode ? 'accent-blue-400' : 'accent-blue-500'}`} defaultChecked />
                      <label htmlFor="document" className="font-medium">Document Mode</label>
                    </div>
                    
                    <div className={`flex items-center p-3 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                      <input type="checkbox" id="think" className={`mr-3 ${darkMode ? 'accent-blue-400' : 'accent-blue-500'}`} defaultChecked />
                      <label htmlFor="think" className="font-medium">Think</label>
                    </div>
                  </div>
                  
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} mb-6`}>
                    <button className={`font-medium mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                      Upgrade Subscription
                    </button>
                    <div className="text-sm">
                      <span className="font-medium">Doc:</span> Some documentation link here
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <h1 className="text-2xl font-bold mb-2">Lavdle Kiwi AI</h1>
                <p className="text-lg mb-6">Hello! How can I assist you today?</p>
                
                <div className="w-full max-w-md text-center">
                  <p className="text-sm mb-6">Ask me anything...</p>
                  
                  <div className="flex justify-center space-x-4">
                    <button className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white text-sm font-medium`}>
                      DeepSearch
                    </button>
                    <button className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white text-sm font-medium`}>
                      Think
                    </button>
                    <button className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white text-sm font-medium`}>
                      Files
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <Message 
                key={message.id} 
                message={message} 
                darkMode={darkMode} 
              />
            ))}
            {isLoading && (
              <div className={`p-4 rounded-lg max-w-3/4 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} w-fit`}>
                <div className="flex space-x-2">
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>
      
      {/* Search bar */}
      <div className={`p-4 border-t ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
        <SearchBar onSendMessage={handleSendMessage} darkMode={darkMode} />
      </div>
    </div>
  );
};

export default ChatInterface;