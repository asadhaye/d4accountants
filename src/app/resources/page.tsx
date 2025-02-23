'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Resource {
  id: number;
  title: string;
  description: string;
  category: string;
  type: 'article' | 'video' | 'guide' | 'webinar';
  date: string;
  readTime?: string;
  thumbnail?: string;
}

const ResourcesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const resources: Resource[] = [
    {
      id: 1,
      title: 'Understanding the New Tax Year Changes 2024',
      description: 'A comprehensive guide to the latest tax regulations and how they affect your business.',
      category: 'Tax Updates',
      type: 'article',
      date: '2024-01-15',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Digital Transformation in Accounting',
      description: 'Learn how cloud accounting and automation can streamline your financial processes.',
      category: 'Technology',
      type: 'video',
      date: '2024-01-10'
    },
    {
      id: 3,
      title: 'Small Business Growth Strategies',
      description: 'Expert insights on scaling your business while maintaining financial health.',
      category: 'Business Advisory',
      type: 'guide',
      date: '2024-01-05',
      readTime: '15 min read'
    },
    {
      id: 4,
      title: 'Upcoming Tax Planning Webinar',
      description: 'Join our experts for a live session on tax planning strategies for 2024.',
      category: 'Events',
      type: 'webinar',
      date: '2024-02-01'
    }
  ];

  const categories = ['all', ...new Set(resources.map(item => item.category))];

  const filteredResources = activeCategory === 'all'
    ? resources
    : resources.filter(item => item.category === activeCategory);

  const getTypeIcon = (type: Resource['type']) => {
    switch (type) {
      case 'article':
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14" />
          </svg>
        );
      case 'video':
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        );
      case 'guide':
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'webinar':
        return (
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-white mb-4"
          >
            Resources & Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Discover our latest articles, guides, and webinars to help grow your business
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-2xl"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-blue-600">
                    {getTypeIcon(resource.type)}
                  </div>
                  <span className="ml-2 text-sm font-medium text-blue-600 uppercase tracking-wider">
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 hover:text-blue-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{resource.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="bg-gray-100 px-3 py-1 rounded-full">{resource.date}</span>
                  {resource.readTime && (
                    <span className="bg-gray-100 px-3 py-1 rounded-full">{resource.readTime}</span>
                  )}
                </div>
                <button 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-medium
                    hover:from-blue-700 hover:to-blue-800 transform transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  {resource.type === 'webinar' ? 'Register Now' : 'Read More'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourcesPage;