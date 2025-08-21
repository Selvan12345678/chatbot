import { useState } from 'react';

const ChatHistory = ({ darkMode = false }) => {
  const [activeTab, setActiveTab] = useState('ALL CHATS');
  
  return (
    <div className={`flex flex-col h-full ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
      {/* Header */}
      <div className={`p-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <h1 className="text-xl font-semibold">Chat History</h1>
      </div>
      
      {/* Tabs */}
      <div className={`flex border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <button
          onClick={() => setActiveTab('ALL CHATS')}
          className={`flex-1 py-3 font-medium text-sm ${activeTab === 'ALL CHATS' ? (darkMode ? 'text-blue-400 border-b-2 border-blue-400' : 'text-blue-600 border-b-2 border-blue-600') : ''}`}
        >
          ALL CHATS
        </button>
        <button
          onClick={() => setActiveTab('SAVED')}
          className={`flex-1 py-3 font-medium text-sm ${activeTab === 'SAVED' ? (darkMode ? 'text-blue-400 border-b-2 border-blue-400' : 'text-blue-600 border-b-2 border-blue-600') : ''}`}
        >
          SAVED
        </button>
      </div>
      
      {/* Search */}
      <div className={`p-3 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className={`relative rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <input
            type="text"
            placeholder="Search chats..."
            className={`w-full py-2 px-4 pr-10 bg-transparent outline-none text-sm ${darkMode ? 'placeholder-gray-500' : 'placeholder-gray-400'}`}
          />
          <div className="absolute right-3 top-2.5">
            <svg className={`w-5 h-5 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Empty state */}
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
          <svg className={`w-8 h-8 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        <p className={`text-lg font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>No chats yet</p>
        <p className={`text-sm mb-4 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>Start a new conversation</p>
        <button className={`px-4 py-2 rounded-lg text-sm font-medium ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white`}>
          New Chat
        </button>
      </div>
    </div>
  );
};

export default ChatHistory;