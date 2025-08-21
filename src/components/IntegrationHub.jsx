const IntegrationHub = ({ darkMode = false }) => {
  return (
    <div className={`min-h-screen p-6 overflow-y-auto ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Integration Hub</h1>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Connect your favorite apps and services to streamline your workflow
          </p>
        </header>
        
        {/* Google Workspace Section */}
        <section className={`mb-8 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="p-5 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} flex items-center justify-center mr-3`}>
                  <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.545 10.239v3.821h5.445c-0.712 2.315-2.647 3.972-5.445 3.972-3.332 0-6.033-2.701-6.033-6.032s2.701-6.032 6.033-6.032c1.498 0 2.866 0.549 3.921 1.453l2.814-2.814c-1.784-1.667-4.146-2.675-6.735-2.675-5.522 0-10 4.477-10 10s4.478 10 10 10c8.396 0 10-7.193 10-10 0-0.61-0.053-1.209-0.149-1.791h-9.851z"/>
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Google Workspace</h2>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Connect to Google services including Gmail, Drive and Calendar
                  </p>
                </div>
              </div>
              <button className={`text-sm px-4 py-2 rounded-md ${darkMode ? 'text-red-400 hover:bg-gray-700' : 'text-red-500 hover:bg-gray-100'}`}>
                Disconnect
              </button>
            </div>
          </div>
          
          <div className="p-5">
            <h3 className="font-medium text-sm mb-4 uppercase tracking-wider opacity-60">Available Services</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-between py-2">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span>Gmail</span>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'}`}>
                  Connected
                </span>
              </li>
              <li className="flex items-center justify-between py-2">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"/>
                  </svg>
                  <span>Google Drive</span>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'}`}>
                  Connected
                </span>
              </li>
              <li className="flex items-center justify-between py-2">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-yellow-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM9 10H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>
                  </svg>
                  <span>Google Calendar</span>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'}`}>
                  Connected
                </span>
              </li>
              <li className="flex items-center justify-between py-2 border-t border-gray-200 dark:border-gray-700 pt-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-gray-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span className={darkMode ? "text-gray-300" : "text-gray-700"}>Disconnect Google Workspace</span>
                </div>
              </li>
            </ul>
          </div>
        </section>
        
        {/* Microsoft 365 Section */}
        <section className={`mb-8 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="p-5 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} flex items-center justify-center mr-3`}>
                  <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12h8v8h-8zM4 12h8v8H4zM12 4h8v8h-8zM4 4h8v8H4z"/>
                  </svg>
                </div>
                <div>
                  <h2 className="text-lg font-semibold">Microsoft 365</h2>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Connect to Microsoft services including OneDrive
                  </p>
                </div>
              </div>
              <button className={`text-sm px-4 py-2 rounded-md ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white`}>
                Connect
              </button>
            </div>
          </div>
          
          <div className="p-5">
            <h3 className="font-medium text-sm mb-4 uppercase tracking-wider opacity-60">Available Services</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-between py-2">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"/>
                  </svg>
                  <span>OneDrive Files</span>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${darkMode ? 'bg-gray-600 text-gray-400' : 'bg-gray-200 text-gray-600'}`}>
                  unavailable
                </span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default IntegrationHub;