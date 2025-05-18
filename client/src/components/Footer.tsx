import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold font-poppins mb-2 bg-white text-black inline-block px-2 rounded">
              Isha<span className="text-primary">.</span>
            </h2>
            <p className="text-gray-300">Web Developer & CSE Student</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="mb-2">Thank you for visiting my portfolio</p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/IshaGusain2004"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors" 
                aria-label="GitHub Profile"
              >
                <FaGithub className="text-xl" />
              </a>
              <a 
                href="https://www.linkedin.com/in/isha-gusain-411a0a263/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors" 
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a 
                href="#"
                className="text-gray-400 hover:text-primary transition-colors" 
                aria-label="Twitter Profile"
              >
                <FaTwitter className="text-xl" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} Isha Gusain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
