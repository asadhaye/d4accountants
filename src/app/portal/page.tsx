'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const ClientPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual authentication
    setIsLoggedIn(true);
  };

  const mockDocuments = [
    { id: 1, name: 'Annual Tax Return 2023', type: 'Tax', date: '2023-12-31' },
    { id: 2, name: 'Financial Statement Q4', type: 'Financial', date: '2023-12-15' },
    { id: 3, name: 'VAT Return Q4', type: 'Tax', date: '2023-12-01' },
    { id: 4, name: 'Payroll Summary', type: 'HR', date: '2023-11-30' },
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="text-center text-4xl font-extrabold text-blue-900 tracking-tight">
            Client Portal Login
          </h2>
          <p className="mt-2 text-center text-sm text-blue-600 tracking-wide font-medium">
            Secure access to your financial documents
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-xl sm:rounded-xl sm:px-10 border border-blue-100 backdrop-blur-sm bg-opacity-80">
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-blue-700 tracking-wide">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-blue-300 rounded-lg shadow-sm placeholder-blue-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-blue-400"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-blue-700 tracking-wide">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-blue-300 rounded-lg shadow-sm placeholder-blue-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-blue-400"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                >
                  Sign in
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-blue-900 tracking-tight">Welcome to Your Portal</h1>
            <p className="mt-1 text-sm text-blue-600 tracking-wide font-medium">Manage your financial documents securely</p>
          </div>
          <motion.button
            onClick={() => setIsLoggedIn(false)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-4 py-2 border border-transparent rounded-lg shadow-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all duration-200"
          >
            Sign Out
          </motion.button>
        </div>

        <div className="bg-white shadow-xl overflow-hidden sm:rounded-xl border border-blue-100 backdrop-blur-sm bg-opacity-80">
          <div className="px-4 py-5 sm:px-6 border-b border-blue-200 bg-blue-50">
            <h2 className="text-xl leading-6 font-semibold text-blue-900 tracking-tight">Your Documents</h2>
          </div>
          <div className="divide-y divide-blue-200">
            <ul className="divide-y divide-blue-200">
              {mockDocuments.map((doc) => (
                <motion.li
                  key={doc.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="group px-4 py-4 sm:px-6 hover:bg-gray-50 cursor-pointer transition-colors duration-150"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-blue-400 group-hover:text-blue-500 transition-colors duration-150"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors duration-150">{doc.name}</div>
                        <div className="text-sm text-blue-500 tracking-wide">{doc.type}</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 tracking-wide">{doc.date}</div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientPortal;