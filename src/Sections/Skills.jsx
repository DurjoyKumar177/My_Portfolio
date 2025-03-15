import React, { useState } from 'react';
import { FaPython, FaReact, FaBootstrap, FaHtml5, FaCss3Alt, FaJs, FaDatabase } from 'react-icons/fa';
import { SiDjango, SiTailwindcss, SiMysql, SiPostgresql, SiSqlite, SiPhp, SiArduino, SiCisco, SiFastapi, SiVite } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { CgCPlusPlus } from 'react-icons/cg';

const skillsData = [
  // Backend
  { name: 'Django', icon: <SiDjango size={60} color="#092E20" />, shadow: 'shadow-green-600', category: 'Backend' },
  { name: 'REST API', icon: <TbApi size={60} color="#61DAFB" />, shadow: 'shadow-blue-600', category: 'Backend' },
  { name: 'Python', icon: <FaPython size={60} color="#3776AB" />, shadow: 'shadow-blue-500', category: 'Backend' },
  { name: 'PostgreSQL', icon: <SiPostgresql size={60} color="#336791" />, shadow: 'shadow-blue-600', category: 'Backend' },
  { name: 'SQLite', icon: <SiSqlite size={60} color="#003B57" />, shadow: 'shadow-blue-400', category: 'Backend' },
  { name: 'MySQL', icon: <SiMysql size={60} color="#4479A1" />, shadow: 'shadow-blue-500', category: 'Backend' },

  // Frontend
  { name: 'HTML', icon: <FaHtml5 size={60} color="#E34F26" />, shadow: 'shadow-orange-500', category: 'Frontend' },
  { name: 'CSS', icon: <FaCss3Alt size={60} color="#1572B6" />, shadow: 'shadow-blue-500', category: 'Frontend' },
  { name: 'JavaScript', icon: <FaJs size={60} color="#F7DF1E" />, shadow: 'shadow-yellow-500', category: 'Frontend' },
  { name: 'React', icon: <FaReact size={60} color="#61DAFB" />, shadow: 'shadow-blue-400', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={60} color="#38B2AC" />, shadow: 'shadow-teal-400', category: 'Frontend' },
  { name: 'Bootstrap', icon: <FaBootstrap size={60} color="#7952B3" />, shadow: 'shadow-purple-500', category: 'Frontend' },
  { name: 'Vite', icon: <SiVite size={60} color="#646CFF" />, shadow: 'shadow-indigo-500', category: 'Frontend' },

  // Languages
  { name: 'C', icon: <CgCPlusPlus size={60} color="#A8B9CC" />, shadow: 'shadow-gray-500', category: 'Languages' },
  { name: 'C++', icon: <CgCPlusPlus size={60} color="#00599C" />, shadow: 'shadow-blue-600', category: 'Languages' },
  { name: 'Python', icon: <FaPython size={60} color="#3776AB" />, shadow: 'shadow-blue-500', category: 'Languages' },
  { name: 'JavaScript', icon: <FaJs size={60} color="#F7DF1E" />, shadow: 'shadow-yellow-500', category: 'Languages' },

  // Others
  { name: 'PHP', icon: <SiPhp size={60} color="#777BB4" />, shadow: 'shadow-purple-600', category: 'Others' },
  { name: 'Arduino', icon: <SiArduino size={60} color="#00979D" />, shadow: 'shadow-teal-500', category: 'Others' },
  { name: 'Cisco', icon: <SiCisco size={60} color="#1BA0D7" />, shadow: 'shadow-blue-400', category: 'Others' },
  { name: 'Networking', icon: <FaDatabase size={60} color="#3E4E88" />, shadow: 'shadow-gray-600', category: 'Others' },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('Backend');

  const tabs = ['Backend', 'Frontend', 'Languages', 'Others'];
  const filteredSkills = skillsData.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="pt-4 bg-gradient-to-b from-gray-100 to-gray-300 w-full min-h-screen flex items-center justify-center">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-4xl font-bold text-gray-800 inline border-b-4 border-black pb-2">
            Skills
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            These are the technologies I've worked with
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-semibold text-lg transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8 px-4 sm:px-0">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg ${skill.shadow} bg-white/90 backdrop-blur-md transform transition-all`}
            >
              <div className="w-16 mx-auto">{skill.icon}</div>
              <p className="mt-4 text-gray-800 font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;