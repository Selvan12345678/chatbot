import { useState } from 'react';
import ChatInterface from './components/ChatInterface';
import ProjectsPage from './components/ProjectsPage';
import SettingsPage from './components/SettingsPage';
import Sidebar from './components/Sidebar';
import ChatHistory from './components/ChatHistory';
import IntegrationHub from './components/IntegrationHub';

function App() {
  const [activePage, setActivePage] = useState('chat');
  const [darkMode, setDarkMode] = useState(false);

  const renderPage = () => {
    switch (activePage) {
      case 'chat':
        return <ChatInterface darkMode={darkMode} />;
      case 'projects':
        return <ProjectsPage darkMode={darkMode} />;
      case 'settings':
        return <SettingsPage darkMode={darkMode} setDarkMode={setDarkMode} />;
       case 'history':
        return <ChatHistory darkMode={darkMode}  />;
      case 'integration-hub':
        return <IntegrationHub darkMode={darkMode} />;
      
      default:
        return <ChatInterface darkMode={darkMode} />;
    }
  };

  return (
    <div className={`flex h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Sidebar activePage={activePage} setActivePage={setActivePage} darkMode={darkMode} />
      <div className="flex-1 flex flex-col overflow-hidden">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;