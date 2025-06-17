import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Consultant',
      company: 'EY (Ernst & Young)',
      period: 'August,2022 - Present',
      description: [
        'Working as a Frontend Application Developer, specializing in React and modern web technologies',
        'Developing and maintaining enterprise-level applications using React, TypeScript, and Redux',
        'Implementing responsive designs and ensuring cross-browser compatibility',
        'Collaborating with UX/UI teams to create intuitive user interfaces',
        'Participating in code reviews and mentoring junior developers'
      ],
      technologies: ['React', 'TypeScript/JavaScript', 'Redux', 'Tailwind CSS', 'HTML5/CSS3']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology in Electronics and Communication Engineering',
      institution: 'Graphic Era University',
      period: '2018 - 2022',
      description: 'Graduated with an outstanding CGPA of 9.6, with a strong focus on both hardware and software development'
    },
    {
      degree: 'Intermediate (Class XII)',
      institution: 'Don Bosco School, Pithoragarh',
      period: '2017 - 2018',
      description: 'Completed with distinction, securing 90.4% marks'
    },
    {
      degree: 'High School (Class X)',
      institution: 'Don Bosco School, Pithoragarh',
      period: '2015 - 2016',
      description: 'Graduated with perfect score, achieving 10 CGPA'
    }
  ];

  return (
    <section id="experience" className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Experience & Education</h2>
        
        {/* Work Experience */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200">Work Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h4>
                    <p className="text-blue-600 dark:text-blue-400">{exp.company}</p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">{exp.period}</span>
                </div>
                <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700 dark:text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-gray-800 dark:text-gray-200">Education</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                    <p className="text-blue-600 dark:text-blue-400">{edu.institution}</p>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">{edu.period}</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Experience; 