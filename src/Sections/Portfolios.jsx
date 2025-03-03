import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiHeart, FiArrowUpRight } from "react-icons/fi";

const portfolioItems = [
  {
    id: 1,
    image: "/src/assets/netbill1.png",
    category: "DRF Web Application",
    likes: 950,
    title: "NetBill Manager",
    description:
      "NetBill Manager is a web application that helps to manage the billing system of a small business. It is built with Django Rest Framework and React.",
    delay: 100,
    githubLinkFrontend: "https://github.com/user/project1-frontend",
    githubLinkBackend: "https://github.com/user/project1-backend",
    technologies: [
      { name: "Django", color: "bg-green-600" },
      { name: "Python", color: "bg-blue-500" },
      { name: "PostgreSQL", color: "bg-blue-600" },
      { name: "React", color: "bg-blue-500" },
      { name: "Tailwind", color: "bg-teal-500" },
      { name: "JavaScript", color: "bg-green-500" },
    ],
  },
  {
    id: 2,
    image: "/assets/images/portfolio/portfolio-02.jpg",
    category: "DRF Web Application",
    likes: 750,
    title: "TuitionVault",
    description:
      "TuitionVault is a web application that helps to manage the tuition system of a small business. It is built with Django Rest Framework and React.",
    delay: 300,
    githubLinkFrontend: "https://github.com/DurjoyKumar177/TuitionVault_Frontend",
    githubLinkBackend: "https://github.com/DurjoyKumar177/TuitionVault",
    technologies: [
      { name: "Django", color: "bg-green-600" },
      { name: "Python", color: "bg-blue-500" },
      { name: "SQLite", color: "bg-blue-600" },
      { name: "HTML", color: "bg-blue-500" },
      { name: "CSS", color: "bg-blue-500" },
      { name: "Tailwind", color: "bg-teal-500" },
      { name: "JavaScript", color: "bg-green-500" },
    ],
  },

];

const Portfolios = () => {
  return (
    <section id="portfolio" className="pt-24 pb-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 mt-2">
            My Portfolio
          </h2>
          <span className="text-gray-500 text-sm uppercase tracking-wider">
            Explore my work and share your feedback
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="mt-12 md:mt-8 sm:mt-6"
              data-aos="fade-up"
              data-aos-delay={item.delay}
              data-aos-once="true"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
                <div className="relative">
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    <img
                      src={item.image}
                      alt="Portfolio Item"
                      className="w-full h-48 object-cover"
                    />
                  </a>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-sm text-gray-600 uppercase font-semibold">
                      {item.category}
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <FiHeart className="text-red-500" />
                      <span>{item.likes}</span>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`inline-block px-3 py-1 text-xs font-semibold text-white rounded-full ${tech.color}`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    {item.githubLinkFrontend && (
                      <a
                        href={item.githubLinkFrontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 hover:text-blue-500"
                      >
                        <FaGithub className="text-xl" />
                        <span>Frontend</span>
                      </a>
                    )}
                    {item.githubLinkBackend && (
                      <a
                        href={item.githubLinkBackend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 hover:text-blue-500"
                      >
                        <FaGithub className="text-xl" />
                        <span>Backend</span>
                      </a>
                    )}
                    {!item.githubLinkFrontend && !item.githubLinkBackend && (
                      <div className="text-gray-400">No repository available</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolios;