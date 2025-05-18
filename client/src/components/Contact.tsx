import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Please reach out to me at ishagusain36@gmail.com for collaboration, internship, or job opportunities.
          </p>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600" 
              alt="Contact Me" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex flex-col space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <a 
                    href="mailto:ishagusain36@gmail.com" 
                    className="text-primary hover:underline"
                  >
                    ishagusain36@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p>+91-9568442176</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Location</h3>
                  <p>Uttrakhand, India</p>
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="font-semibold text-lg mb-3">Connect with me</h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/IshaGusain2004" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 p-3 rounded-full transition-colors" 
                    aria-label="GitHub Profile"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/isha-gusain-411a0a263/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 p-3 rounded-full transition-colors" 
                    aria-label="LinkedIn Profile"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a 
                    href="#" 
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 p-3 rounded-full transition-colors" 
                    aria-label="Twitter Profile"
                  >
                    <FaTwitter className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
