import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I'm a passionate React Developer with a strong foundation in web development
              and a keen eye for creating intuitive user experiences. With expertise in
              React and modern frontend technologies, I strive to build applications that are
              not only functional but also aesthetically pleasing.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              My journey in software development began with a focus on frontend technologies,
              particularly React. I'm constantly learning and exploring new technologies to
              stay at the forefront of web development trends.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              When I'm not coding, I enjoy learning new technologies and contributing to
              open-source projects. I believe in maintaining a healthy work-life balance
              and continuously growing both professionally and personally.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Contact</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Email: kirandhami380@gmail.com<br />
                Phone: +91 8171796120
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Role</h3>
              <p className="text-gray-600 dark:text-gray-300">
                React Developer<br />
                Frontend Specialist
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Location</h3>
              <p className="text-gray-600 dark:text-gray-300">
                India
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Languages</h3>
              <p className="text-gray-600 dark:text-gray-300">
                English<br />
                Hindi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 