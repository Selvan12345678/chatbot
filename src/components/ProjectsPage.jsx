const ProjectsPage = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React frontend and Node.js backend.",
      tags: ["React", "Node.js", "MongoDB"],
      similar: 4
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A Kanban-style task management application with drag-and-drop functionality.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      similar: 2
    },
    {
      id: 3,
      title: "AI Chatbot Integration",
      description: "Integration of GPT-based chatbot into existing customer support system.",
      tags: ["Python", "React", "API"],
      similar: 5
    }
  ];

  return (
    <div className={`flex-1 flex flex-col h-full overflow-y-auto ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Projects header */}
      <div className={`p-4 border-b ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'} flex items-center`}>
        <h2 className="text-xl font-semibold">Projects</h2>
        <button className={`ml-auto p-2 rounded-lg ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white`}>
          + New Project
        </button>
      </div>
      
      {/* Projects container */}
 <div className=" p-4">       
   <div className="mb-6">
          <h3 className={`text-lg font-medium mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Your Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className={`rounded-lg p-4 transition-all hover:shadow-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50 border border-gray-200'}`}
              >
                <h4 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h4>
                <p className={`text-sm mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-gray-700 text-blue-300' : 'bg-blue-100 text-blue-600'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {project.similar} similar projects available
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className={`text-lg font-medium mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Similar Projects</h3>
          <div className={`rounded-lg p-4 ${darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
            <div className="flex items-center mb-4">
              <div className={`flex-1 h-px ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
              <span className={`px-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Based on your current projects</span>
              <div className={`flex-1 h-px ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[...projects].reverse().map((project) => (
                <div 
                  key={`similar-${project.id}`} 
                  className={`rounded-lg p-4 transition-all ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'}`}
                >
                  <h4 className={`font-medium mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h4>
                  <p className={`text-xs mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Similar to your "{projects.find(p => p.id !== project.id)?.title}" project</p>
                  <div className={`text-xs px-2 py-1 rounded-full inline-block ${darkMode ? 'bg-gray-600 text-blue-300' : 'bg-blue-200 text-blue-700'}`}>
                    View details
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;