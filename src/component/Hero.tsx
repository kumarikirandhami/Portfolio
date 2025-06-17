import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-yellow-300">Kumari Kiran Dhami</span>
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">
          React Developer
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
          I build beautiful, responsive, and user-friendly web applications
          using modern React technologies and best practices.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 