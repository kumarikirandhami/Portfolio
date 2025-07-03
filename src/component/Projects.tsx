import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with React, Redux, and Node.js. Features include user authentication, product management, shopping cart, and payment integration.',
      technologies: ['React', 'Redux', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      github: 'https://github.com/yourusername/ecommerce',
      live: 'https://ecommerce-demo.com',
      features: [
        'User authentication and authorization',
        'Product search and filtering',
        'Shopping cart functionality',
        'Payment processing',
        'Order management system'
      ]
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, team collaboration features, and progress tracking.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      github: 'https://github.com/yourusername/task-manager',
      live: 'https://task-manager-demo.com',
      features: [
        'Real-time updates',
        'Team collaboration',
        'Task assignment and tracking',
        'Progress visualization',
        'Notification system'
      ]
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing my work and skills. Built with React and Tailwind CSS.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      github: 'https://github.com/yourusername/portfolio',
      live: 'https://your-portfolio.com',
      features: [
        'Responsive design',
        'Dark/Light mode',
        'Smooth animations',
        'Contact form',
        'Project showcase'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  {/* <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-800 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors duration-300"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                    >
                      Live Demo
                    </a>
                  </div> */}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
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