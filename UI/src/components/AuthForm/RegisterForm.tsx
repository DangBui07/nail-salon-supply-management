import React from 'react';

interface RegisterFormProps {
  isDarkMode?: boolean;
}

const RegisterForm: React.FC<RegisterFormProps> = () => {
  return (
    <>
      {/* Form Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Start your journey</h2>
        <h1 className="text-3xl font-bold mt-2">
          Sign Up to NiniNails Inventory App
        </h1>
      </div>

      {/* Auth Form */}
      <form className="space-y-5">
        <div>
          <label className="text-sm mb-1 block text-gray-300">Name</label>
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 
              bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="text-sm mb-1 block text-gray-300">Email</label>
          <input
            type="email"
            placeholder="example@email.com"
            required
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 
              bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="text-sm mb-1 block text-gray-300">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            required
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 
              bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="text-sm mb-1 block text-gray-300">
            Re-confirm Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            required
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 
              bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="text-sm mb-1 block text-gray-300">
            Reason for Creating an Account
          </label>
          <textarea
            placeholder="Tell us why you want to create an account"
            required
            className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 
              bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:ring-blue-400"
            rows={4}
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-3 rounded-md font-medium text-white
            bg-blue-600 hover:bg-blue-700 transition-all duration-300"
        >
          Sign Up
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
