import React, { useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; // Default react-tabs styling (optional, can be overridden)
import AOS from 'aos';

// Data for resume sections
const educationData = [
  {
    title: 'Personal Portfolio April Fools',
    institution: 'University of DVI (1997 - 2001)',
    score: '4.30/5',
    description: 'The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.',
  },
  {
    title: 'Examples Of Personal Portfolio',
    institution: 'College of Studies (2000 - 2002)',
    score: '4.50/5',
    description: 'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.',
  },
  {
    title: 'Tips For Personal Portfolio',
    institution: 'University of Studies (1997 - 2001)',
    score: '4.80/5',
    description: 'If you are going to use a passage. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.',
  },
];

const jobExperienceData = [
  {
    title: 'Diploma in Web Development',
    institution: 'BSE In CSE (2004 - 2008)',
    score: '4.70/5',
    description: 'Contrary to popular belief. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.',
  },
  {
    title: 'The Personal Portfolio Mystery',
    institution: 'Job at Zebra Infotech (2008 - 2025)',
    score: '4.95/5',
    description: 'Generate Lorem Ipsum which looks. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.',
  },
  {
    title: 'Diploma in Computer Science',
    institution: 'Works at Plugin Development (2016 - 2020)',
    score: '5.00/5',
    description: 'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.',
  },
];

const designSkills = [
  { skill: 'Photoshop', percentage: 100 },
  { skill: 'Figma', percentage: 95 },
  { skill: 'Adobe XD', percentage: 60 },
  { skill: 'Adobe Illustrator', percentage: 70 },
  { skill: 'Design', percentage: 90 },
];

const devSkills = [
  { skill: 'HTML', percentage: 85 },
  { skill: 'CSS', percentage: 80 },
  { skill: 'JavaScript', percentage: 90 },
  { skill: 'Software', percentage: 75 },
  { skill: 'Plugin', percentage: 70 },
];

const Resume = () => {
  useEffect(() => {
    AOS.init({ duration: 500, once: true });
  }, []);

  return (
    <section id="resume" className="pt-24 pb-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-10">
          <span className="text-gray-500 text-sm uppercase tracking-wider">
            7+ Years of Experience
          </span>
          <h2 className="text-4xl font-bold text-gray-800 mt-2">My Resume</h2>
        </div>

        {/* Tabs */}
        <Tabs defaultIndex={3} className="mt-12">
          <TabList className="flex flex-wrap justify-center gap-4 mb-8 border-b border-gray-300">
            <Tab className="px-4 py-2 text-gray-700 hover:text-blue-500 cursor-pointer focus:outline-none" selectedClassName="text-blue-500 border-b-2 border-blue-500">
              Education
            </Tab>
            <Tab className="px-4 py-2 text-gray-700 hover:text-blue-500 cursor-pointer focus:outline-none" selectedClassName="text-blue-500 border-b-2 border-blue-500">
              Professional Skills
            </Tab>
            <Tab className="px-4 py-2 text-gray-700 hover:text-blue-500 cursor-pointer focus:outline-none" selectedClassName="text-blue-500 border-b-2 border-blue-500">
              Experience
            </Tab>
            <Tab className="px-4 py-2 text-gray-700 hover:text-blue-500 cursor-pointer focus:outline-none" selectedClassName="text-blue-500 border-b-2 border-blue-500">
              Interview
            </Tab>
          </TabList>

          {/* Education Tab */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
              <div>
                <span className="text-gray-500 text-sm">2007 - 2010</span>
                <h4 className="text-2xl font-semibold text-gray-800 mt-2">Education Quality</h4>
                <div className="mt-4 space-y-6">
                  {educationData.map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-lg font-medium text-gray-800">{item.title}</h4>
                          <span className="text-gray-600 text-sm">{item.institution}</span>
                        </div>
                        <span className="text-blue-500 font-semibold">{item.score}</span>
                      </div>
                      <p className="text-gray-600 mt-2">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10 md:mt-0">
                <span className="text-gray-500 text-sm">2007 - 2010</span>
                <h4 className="text-2xl font-semibold text-gray-800 mt-2">Job Experience</h4>
                <div className="mt-4 space-y-6">
                  {jobExperienceData.map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-lg font-medium text-gray-800">{item.title}</h4>
                          <span className="text-gray-600 text-sm">{item.institution}</span>
                        </div>
                        <span className="text-blue-500 font-semibold">{item.score}</span>
                      </div>
                      <p className="text-gray-600 mt-2">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabPanel>

          {/* Professional Skills Tab */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
              <div>
                <span className="text-gray-500 text-sm">Features</span>
                <h4 className="text-2xl font-semibold text-gray-800 mt-2">Design Skill</h4>
                <div className="mt-4 space-y-4">
                  {designSkills.map((skill, index) => (
                    <div key={index} className="space-y-1">
                      <h6 className="text-gray-700 font-medium">{skill.skill}</h6>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-blue-500 h-2.5 rounded-full animate-fadeInLeft"
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
                <h4 className="text-2xl font-semibold text-gray-800 mt-2">Development Skill</h4>
                <div className="mt-4 space-y-4">
                  {devSkills.map((skill, index) => (
                    <div key={index} className="space-y-1">
                      <h6 className="text-gray-700 font-medium">{skill.skill}</h6>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 relative">
                        <div
                          className="bg-blue-500 h-2.5 rounded-full animate-fadeInLeft"
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

          {/* Experience Tab */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
              <div>
                <span className="text-gray-500 text-sm">2007 - 2010</span>
                <h4 className="text-2xl font-semibold text-gray-800 mt-2">Education Quality</h4>
                <div className="mt-4 space-y-6">
                  {educationData.map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-lg font-medium text-gray-800">{item.title}</h4>
                          <span className="text-gray-600 text-sm">{item.institution}</span>
                        </div>
                        <span className="text-blue-500 font-semibold">{item.score}</span>
                      </div>
                      <p className="text-gray-600 mt-2">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10 md:mt-0">
                <span className="text-gray-500 text-sm">2007 - 2010</span>
                <h4 className="text-2xl font-semibold text-gray-800 mt-2">Job Experience</h4>
                <div className="mt-4 space-y-6">
                  {jobExperienceData.map((item, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-lg font-medium text-gray-800">{item.title}</h4>
                          <span className="text-gray-600 text-sm">{item.institution}</span>
                        </div>
                        <span className="text-blue-500 font-semibold">{item.score}</span>
                      </div>
                      <p className="text-gray-600 mt-2">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabPanel>

          {/* Interview Tab */}
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
              <div>
                <span className="text-gray-500 text-sm">2007 - 2010</span>
                <h4 className="text-2xl font-semibold text-gray-800 mt-2">Company Experience</h4>
                <div className="mt-4 space-y-6">
                  {educationData.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-lg shadow-md"
                      data-aos="fade-up"
                      data-aos-delay={index * 200 + 300}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-lg font-medium text-gray-800">{item.title}</h4>
                          <span className="text-gray-600 text-sm">{item.institution}</span>
                        </div>
                        <span className="text-blue-500 font-semibold">{item.score}</span>
                      </div>
                      <p className="text-gray-600 mt-2">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10 md:mt-0">
                <span className="text-gray-500 text-sm">2007 - 2010</span>
                <h4 className="text-2xl font-semibold text-gray-800 mt-2">Job Experience</h4>
                <div className="mt-4 space-y-6">
                  {jobExperienceData.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white p-4 rounded-lg shadow-md"
                      data-aos="fade-up"
                      data-aos-delay={index * 200 + 500}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="text-lg font-medium text-gray-800">{item.title}</h4>
                          <span className="text-gray-600 text-sm">{item.institution}</span>
                        </div>
                        <span className="text-blue-500 font-semibold">{item.score}</span>
                      </div>
                      <p className="text-gray-600 mt-2">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default Resume;