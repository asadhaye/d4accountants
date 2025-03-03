'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { handleError } from '@/lib/error-handling';

export function PortalContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO: Implement actual login logic
      setIsLoggedIn(true);
      setEmail('');
      setPassword('');
    } catch (error) {
      handleError(error as Error, {
        category: 'auth',
        userMessage: 'Failed to log in. Please try again.',
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {!isLoggedIn ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto"
        >
          <h2 className="text-2xl font-bold mb-6">Client Portal Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded-lg"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Log In
            </Button>
          </form>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Welcome to Your Portal</h2>
          <p className="mb-4">You are now logged in.</p>
          <Button
            onClick={() => setIsLoggedIn(false)}
            variant="outline"
          >
            Log Out
          </Button>
        </motion.div>
      )}
    </div>
  );
}
