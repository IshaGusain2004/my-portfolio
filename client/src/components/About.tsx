const About = () => {
  const skills = [
    "C/C++", "JavaScript", "React.js", "Redux", "HTML/CSS", 
    "Java", "Tailwind CSS", "Bootstrap", "DBMS", "SQL", "Git", "GitHub"
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg leading-relaxed mb-6">
              I am a final-year BTech CSE student at Graphic Era Hill University. I have experience with technologies like C, C++, Java, JavaScript, React.js, Redux, Bootstrap, Tailwind CSS, HTML/CSS, DBMS, SQL, and core CS fundamentals like OOPs, CN, and DSA.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              I'm also an active member of GDSC Club Graphic Era. Outside coding, I enjoy reading novels and watching tech shows.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                <div className="flex flex-col md:flex-row md:justify-between mb-1">
                  <h4 className="font-semibold">Graphic Era Hill University</h4>
                  <span className="text-gray-600">2021 - 2025</span>
                </div>
                <p>BTech in Computer Science Engineering (CGPA - 9.00)</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-blue-100 text-primary px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=600" 
              alt="Web Development Concept" 
              className="rounded-lg shadow-xl w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
