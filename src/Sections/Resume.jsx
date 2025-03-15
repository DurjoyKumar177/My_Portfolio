import React, { useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Default react-tabs styling (optional, can be overridden)
import AOS from 'aos';

// Data for resume sections
const educationData = [
  {
    title: 'Bachelor of Science in Computer Science',
    institution: 'Dhaka City College (2019-2025)',
    score: 'Running',
    Department: 'Computer Science and Engineering',
    description: 'I am currently pursuing a B.Sc. (Hons) in Computer Science at Dhaka City College, a prestigious institution offering a four-year professional CSE course since 2006 under National University. I actively participate in programming contests like ICPC and NCPC and am an enthusiastic member of the college’s Programming Club.',
  },
  {
    title: 'Course: CSE Fundamentals with Phitron: Fall 2023',
    institution: 'Phitron (2023-2024)',
    score: 'CGPA 3.67/4',
    Department: 'Software Development',
    description: 'Completed the CSE Fundamentals with Phitron, strengthening my skills in C, C++, data structures, algorithms, Python, Django, DRF, and web development. Managed 6-8 hours of daily study alongside university coursework, enhancing my problem-solving and technical foundation.',  },
  {
    title: 'Higher Secondary Certificate',
    institution: 'Doctor Mahabubur Rahman Mollah College (2017-2019)',
    score: 'GPA 4.75/5',
    group: 'Science',
    description:
      'Dhaka City College is a prestigious institution that offers excellent education. I completed my HSC from this college and was actively involved in the Science Fair and Science Club during my time there.',
  },
  {
    title: 'Secondary School Certificate',
    institution: 'Sinha High School (2015-2017)',
    score: 'GPA 5/5',
    group: 'Science',
    description: 'Sinha High School is the most popular school in our area. I completed my SSC from this school.',
  },
];

const certificatesData = [
  {
    title: 'CERTIFICATE OF ACHIEVEMENT- CSE Fundamentals With Phitron: Fall 2023',
    institution: 'Phitron',
    image: '/Phitron_certificate.jpg',
  },
  {
    title: 'ICPC Onsite Contest Participation Certificate (2024)',
    institution: 'ICPC 2024',
    image: '/ICPC-2024.jpg',
  },
  {
    title: 'ICPC Onsite Contest Participation Certificate (2021)',
    institution: 'ICPC 2021',
    image: '/ICPC-2021.jpg',
  },
   
];

const FrontendSkills = [
  { skill: 'HTML', percentage: 85, color: 'bg-blue-500' },
  { skill: 'CSS', percentage: 80, color: 'bg-green-500' },
  { skill: 'JavaScript', percentage: 80, color: 'bg-yellow-500' },
  { skill: 'React', percentage: 90, color: 'bg-purple-500' },
  { skill: 'Tailwind', percentage: 90, color: 'bg-pink-500' },
];

const BackendSkills = [
  { skill: 'Django', percentage: 85, color: 'bg-red-500' },
  { skill: 'Rest_api', percentage: 80, color: 'bg-indigo-500' },
  { skill: 'PostgreSQL', percentage: 90, color: 'bg-teal-500' },
];

const Resume = () => {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  const openImageInNewTab = (image) => {
    window.open(image, '_blank'); // Open image in a new tab
  };

  return (
    <section id="resume" className="pt-24 pb-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mt-2">My Resume</h2>
        </div>

        {/* Tabs */}
        <Tabs defaultIndex={0} className="mt-12">
          <TabList className="flex flex-wrap justify-center gap-4 mb-8 border-b border-gray-300">
            <Tab className="px-4 py-2 text-gray-700 hover:text-blue-500 cursor-pointer focus:outline-none" selectedClassName="text-blue-500 border-b-2 border-blue-500">
              Education
            </Tab>
            <Tab className="px-4 py-2 text-gray-700 hover:text-blue-500 cursor-pointer focus:outline-none" selectedClassName="text-blue-500 border-b-2 border-blue-500">
              Professional Skills
            </Tab>
            <Tab className="px-4 py-2 text-gray-700 hover:text-blue-500 cursor-pointer focus:outline-none" selectedClassName="text-blue-500 border-b-2 border-blue-500">
              Achievements
            </Tab>
          </TabList>

          {/* Education Tab */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md relative"
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <h4 className="text-lg font-medium text-gray-800">{item.title}</h4>
                  <span className="text-gray-600 text-sm">{item.institution}</span>
                  {item.score && <span className="text-blue-500 font-semibold block mt-1">{item.score}</span>}
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              ))}
            </div>
          </TabPanel>

          {/* Professional Skills Tab */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
              <div>
                <span className="text-gray-500 text-sm">Features</span>
                <h4 className="text-2xl font-semibold text-gray-800 mt-2">Frontend Skill</h4>
                <div className="mt-4 space-y-4">
                  {FrontendSkills.map((skill, index) => (
                    <div key={index} className="space-y-1">
                      <h6 className="text-gray-700 font-medium">{skill.skill}</h6>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className={`${skill.color} h-2.5 rounded-full animate-fadeInLeft`}
                          style={{ width: `${skill.percentage}%` }}
                          data-aos="fade-left"
                          data-aos-delay={index * 100 + 300}
                        >
                          <span className="text-xs text-white font-semibold absolute right-0 -top-6">
                            {skill.percentage}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10 md:mt-0">
                <span className="text-gray-500 text-sm">Features</span>
                <h4 className="text-2xl font-semibold text-gray-800 mt-2">Backend Skill</h4>
                <div className="mt-4 space-y-4">
                  {BackendSkills.map((skill, index) => (
                    <div key={index} className="space-y-1">
                      <h6 className="text-gray-700 font-medium">{skill.skill}</h6>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 relative">
                        <div
                          className={`${skill.color} h-2.5 rounded-full animate-fadeInLeft`}
                          style={{ width: `${skill.percentage}%` }}
                          data-aos="fade-left"
                          data-aos-delay={index * 100 + 300}
                        >
                          <span className="text-xs text-white font-semibold absolute right-0 -top-6">
                            {skill.percentage}%
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabPanel>

          {/* Achievements Tab */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {certificatesData.map((certificate, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                >
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-auto object-cover rounded-md cursor-pointer"
                    onClick={() => openImageInNewTab(certificate.image)} // Open image in new tab
                  />
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold mt-4 px-3 py-1 rounded-full">
                    {certificate.institution}
                  </span>
                  <h4 className="text-lg font-medium text-gray-800 mt-2">{certificate.title}</h4>
                </div>
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default Resume;