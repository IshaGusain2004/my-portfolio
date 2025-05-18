import { portfolioProjects } from '@/lib/resume-data';

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects built with React.js, Redux, and Tailwind CSS.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioProjects.map((project) => (
            <div key={project.id} className="project-card bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-56 bg-gray-200 relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={`${project.title} Project`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white text-xl font-bold p-6">{project.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end">
                  <a 
                    href={project.codeLink}
                    className="text-primary hover:text-secondary font-medium flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Source Code</span>
                    <i className="fab fa-github ml-1"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
