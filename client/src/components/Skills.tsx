import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, 
  FaBootstrap, FaGitAlt, FaGithub, FaDatabase
} from 'react-icons/fa';
import { SiTailwindcss, SiRedux, SiCplusplus } from 'react-icons/si';

interface SkillIconProps {
  icon: React.ReactNode;
  name: string;
}

const SkillIcon = ({ icon, name }: SkillIconProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
      <div className="text-4xl mb-2 text-primary">
        {icon}
      </div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
};

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 />, name: 'HTML5' },
    { icon: <FaCss3Alt />, name: 'CSS3' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React.js' },
    { icon: <SiRedux />, name: 'Redux' },
    { icon: <SiCplusplus />, name: 'C++' },
    { icon: <FaJava />, name: 'Java' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
    { icon: <FaBootstrap />, name: 'Bootstrap' },
    { icon: <FaDatabase />, name: 'SQL/DBMS' },
    { icon: <FaGitAlt />, name: 'Git' },
    { icon: <FaGithub />, name: 'GitHub' }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            These are the technologies and tools I've been working with
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <SkillIcon key={index} icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;