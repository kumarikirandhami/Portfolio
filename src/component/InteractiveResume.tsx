import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ResumeSection {
  title: string;
  content: string;
  date: string;
  type: 'education' | 'experience';
}

type ColorSchemeType = 'blue' | 'purple' | 'green';

interface ColorScheme {
  primary: string;
  secondary: string;
  text: string;
}

interface ColorSchemes {
  [key: string]: ColorScheme;
}

const InteractiveResume: React.FC = () => {
  const [font, setFont] = useState('Inter');
  const [colorScheme, setColorScheme] = useState<ColorSchemeType>('blue');

  const resumeSections: ResumeSection[] = [
    {
      title: 'Consultant - EY',
      content: 'Frontend Application Developer specializing in React and modern web technologies',
      date: 'August,2022 - Present',
      type: 'experience'
    },
    {
      title: 'B.Tech in ECE - Graphic Era University',
      content: 'Graduated with CGPA 9.6',
      date: '2018 - 2022',
      type: 'education'
    },
    {
      title: 'Intermediate - Don Bosco School',
      content: 'Completed with 90.4% marks',
      date: '2017 - 2018',
      type: 'education'
    },
    {
      title: 'High School - Don Bosco School',
      content: 'Graduated with 10 CGPA',
      date: '2015 - 2016',
      type: 'education'
    }
  ];

  const colorSchemes: ColorSchemes = {
    blue: {
      primary: 'bg-blue-600',
      secondary: 'bg-blue-100',
      text: 'text-blue-800'
    },
    purple: {
      primary: 'bg-purple-600',
      secondary: 'bg-purple-100',
      text: 'text-purple-800'
    },
    green: {
      primary: 'bg-green-600',
      secondary: 'bg-green-100',
      text: 'text-green-800'
    }
  };

  const fonts = [
    { name: 'Inter', value: 'Inter' },
    { name: 'Roboto', value: 'Roboto' },
    { name: 'Poppins', value: 'Poppins' }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Customization Controls */}
        <div className="mb-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Customize View</h3>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Color Scheme
            </label>
            <div className="flex gap-2">
              {Object.keys(colorSchemes).map((scheme) => (
                <button
                  key={scheme}
                  onClick={() => setColorScheme(scheme as ColorSchemeType)}
                  className={`w-8 h-8 rounded-full ${colorSchemes[scheme].primary} ${colorScheme === scheme ? 'ring-2 ring-offset-2 ring-gray-400' : ''
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />

          {resumeSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-12 ${index % 2 === 0 ? 'ml-auto mr-12' : 'mr-auto ml-12'
                } w-5/12`}
            >
              <div className={`p-6 rounded-lg shadow-md ${section.type === 'experience' ? colorSchemes[colorScheme].primary : colorSchemes[colorScheme].secondary
                }`}>
                <div className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-500"
                  style={{ [index % 2 === 0 ? 'left' : 'right']: '-2.5rem' }} />
                <h3 className={`text-lg font-semibold ${section.type === 'experience' ? 'text-white' : colorSchemes[colorScheme].text
                  }`}>
                  {section.title}
                </h3>
                <p className={`mt-2 ${section.type === 'experience' ? 'text-white' : colorSchemes[colorScheme].text
                  }`}>
                  {section.content}
                </p>
                <span className={`inline-block mt-2 text-sm ${section.type === 'experience' ? 'text-white' : colorSchemes[colorScheme].text
                  }`}>
                  {section.date}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveResume; 