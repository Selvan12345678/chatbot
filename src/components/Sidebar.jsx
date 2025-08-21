const Sidebar = ({ activePage, setActivePage, darkMode }) => {
  return (
    <div className={`w-16 md:w-64 flex flex-col items-center md:items-start p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} border-r ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
      <div className="flex items-center mb-8">
        <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">C</div>
        <span className="ml-2 text-xl font-semibold hidden md:block">ChatBot</span>
      </div>
      
      <nav className="flex-1 w-full">
        <button
          onClick={() => setActivePage('chat')}
          className={`flex items-center w-full p-2 rounded-lg mb-2 ${activePage === 'chat' ? (darkMode ? 'bg-gray-700' : 'bg-blue-100 text-blue-600') : (darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100')}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="ml-2 hidden md:block">Chat</span>
        </button>
        
        <button
          onClick={() => setActivePage('history')}
          className={`flex items-center w-full p-2 rounded-lg mb-2 ${activePage === 'history' ? (darkMode ? 'bg-gray-700' : 'bg-blue-100 text-blue-600') : (darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100')}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="ml-2 hidden md:block">History</span>
        </button>
        
        <button
          onClick={() => setActivePage('projects')}
          className={`flex items-center w-full p-2 rounded-lg mb-2 ${activePage === 'projects' ? (darkMode ? 'bg-gray-700' : 'bg-blue-100 text-blue-600') : (darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100')}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span className="ml-2 hidden md:block">Projects</span>
        </button>

        <button
          onClick={() => setActivePage('integration-hub')}
          className={`flex items-center w-full p-2 rounded-lg mb-2 ${activePage === 'integration-hub' ? (darkMode ? 'bg-gray-700' : 'bg-blue-100 text-blue-600') : (darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100')}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <span className="ml-2 hidden md:block">Integration Hub</span>
        </button>
        
        <button
          onClick={() => setActivePage('settings')}
          className={`flex items-center w-full p-2 rounded-lg ${activePage === 'settings' ? (darkMode ? 'bg-gray-700' : 'bg-blue-100 text-blue-600') : (darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100')}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="ml-2 hidden md:block">Settings</span>
        </button>
      </nav>
      
      <div className="mt-auto w-full">
        <div className={`flex items-center p-2 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">U</div>
          <div className="ml-2 hidden md:block">
            <div className="text-sm font-medium">User Name</div>
            <div className="text-xs opacity-70">user@example.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;