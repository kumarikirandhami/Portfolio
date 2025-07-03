import React from 'react';
import { motion } from 'framer-motion';

const GOOGLE_DRIVE_FILE_ID = "1ljkBUKWlEAy7mcIE5dEjSRAtrox1S3b3"; // Actual file ID from user
const RESUME_DOWNLOAD_LINK = `https://drive.google.com/uc?export=download&id=${GOOGLE_DRIVE_FILE_ID}`;

const Resume: React.FC = () => {
  const handleDownload = () => {
    // Replace with your actual resume file path
    const resumeUrl = '/resume.pdf';
    window.open(resumeUrl, '_blank');
  };

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Resume</h2>
        <div className="flex flex-col items-center justify-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Download my detailed resume to learn more about my experience and qualifications.
            </p>
            <a
              href={RESUME_DOWNLOAD_LINK}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
              onMouseOver={e => (e.currentTarget.style.background = '#3730a3')}
              onMouseOut={e => (e.currentTarget.style.background = '#4f46e5')}
            >
              Download Resume
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Quick Overview</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                <span className="font-semibold">Current Role:</span> Consultant - Frontend Application Developer at EY
              </p>
              <p>
                <span className="font-semibold">Education:</span> B.Tech in Electronics and Communication Engineering
              </p>
              <p>
                <span className="font-semibold">Key Skills:</span> React, TypeScript, Redux, Tailwind CSS
              </p>
              <p>
                <span className="font-semibold">Experience:</span> 2+ years in frontend development
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume; 