import React from 'react';

interface LoginFormProps {
  isDarkMode?: boolean;
}

const LoginForm: React.FC<LoginFormProps> = () => {
  return (
    <>
      {/* Form Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Start your journey</h2>
        <h1 className="text-3xl font-bold mt-2">
          Login to NiniNails Inventory App
        </h1>
      </div>

      {/* Auth Form */}
      <form className="space-y-5">
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

        <a
          href="/forgot-password"
          className="hover:underline text-sm block text-blue-400 hover:text-blue-300"
        >
          Forgot Password?
        </a>

        <button
          type="submit"
          className="w-full px-4 py-3 rounded-md font-medium text-white
            bg-blue-600 hover:bg-blue-700 transition-all duration-300"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
