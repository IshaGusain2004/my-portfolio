import { useState, useEffect } from 'react';
import { FaTimes, FaDownload } from 'react-icons/fa';
import { resumeData } from '@/lib/resume-data';
import { Button } from '@/components/ui/button';
import resumePdf from '@assets/Isha_Gusain_ (2).pdf';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  const [showResumePdf, setShowResumePdf] = useState(false);

  if (!isOpen) return null;

  // Handle click outside the resume container
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const toggleResumeView = () => {
    setShowResumePdf(!showResumePdf);
  };

  return (
    <div 
      className="resume-overlay"
      onClick={handleOverlayClick}
    >
      <div className="resume-container">
        <button 
          className="absolute top-4 right-4 text-xl text-gray-700 hover:text-primary"
          onClick={onClose}
          aria-label="Close resume"
        >
          <FaTimes />
        </button>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Isha Gusain - Resume</h2>
          <div className="flex justify-center gap-4 mt-4">
            <Button 
              className="bg-primary hover:bg-secondary text-white transition-colors"
              onClick={toggleResumeView}
            >
              {showResumePdf ? "View Details" : "View PDF"}
            </Button>
            <a href={resumePdf} download="Isha_Gusain_Resume.pdf">
              <Button className="bg-secondary hover:bg-primary text-white transition-colors">
                <FaDownload className="mr-2" />
                Download PDF
              </Button>
            </a>
          </div>
        </div>

        {showResumePdf ? (
          <div className="w-full h-[800px] mb-6">
            <iframe 
              src={resumePdf} 
              className="w-full h-full border-none" 
              title="Isha Gusain Resume"
            ></iframe>
          </div>
        ) : (
          <div className="border-b pb-6 mb-6">
            <h1 className="text-center text-2xl font-bold mb-2">{resumeData.name}</h1>
            <p className="text-center mb-4">
              {resumeData.contact.phone} | {resumeData.contact.email} | 
              <a href={`https://${resumeData.contact.linkedin}`} className="text-primary hover:underline ml-1">
                {resumeData.contact.linkedin}
              </a> | 
              <a href={`https://${resumeData.contact.github}`} className="text-primary hover:underline ml-1">
                {resumeData.contact.github}
              </a>
            </p>
            
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-2">OBJECTIVE</h2>
              <p>{resumeData.objective}</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-2">EDUCATION</h2>
              {resumeData.education.map((edu, index) => (
                <div key={index} className="mb-2">
                  <div className="flex flex-col md:flex-row md:justify-between">
                    <p className="font-semibold">{edu.institution}</p>
                    <p>{edu.period}</p>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between">
                    <p>{edu.degree}</p>
                    <p>{edu.location}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-2">TECHNICAL SKILLS</h2>
              <p><span className="font-semibold">Programming Languages:</span> {resumeData.skills.programming}</p>
              <p><span className="font-semibold">Libraries and Tools:</span> {resumeData.skills.tools}</p>
              <p><span className="font-semibold">Coursework:</span> {resumeData.skills.coursework}</p>
              <p><span className="font-semibold">Soft Skills:</span> {resumeData.skills.soft}</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-2">CERTIFICATES</h2>
              <ul className="list-disc ml-6">
                {resumeData.certificates.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <h2 className="text-lg font-bold mb-2">PROJECTS</h2>
              {resumeData.projects.map((project, index) => (
                <div key={index} className="mb-3">
                  <p className="font-semibold">{project.title}</p>
                  <p>{project.description}</p>
                </div>
              ))}
            </div>
            
            <div>
              <h2 className="text-lg font-bold mb-2">EXTRACURRICULAR ACTIVITIES</h2>
              <ul className="list-disc ml-6">
                {resumeData.activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeModal;
