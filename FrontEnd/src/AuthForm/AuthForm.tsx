import React from 'react';

const AuthForm: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 p-4 m-8">
      {/* Left Section */}
      <div className="md:w-1/2 text-center md:text-left p-6 bg-blue-500 shadow-md rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-white">Hello, Welcome!</h2>
        <p className="mb-4 text-white">Don't have an account?</p>
        <button className="bg-white text-blue-500 px-4 py-2 rounded hover:bg-gray-200">
          Register
        </button>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 mt-6 md:mt-0 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Username"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <a
            href="/forgot-password"
            className="text-blue-500 hover:underline text-sm block mb-4"
          >
            Forgot Password?
          </a>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;
