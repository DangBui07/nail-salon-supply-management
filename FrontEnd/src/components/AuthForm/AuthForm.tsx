import React, { useState } from 'react';
import LoginForm from './LoginForm.tsx';
import RegisterForm from './RegisterForm.tsx';
import logo from '../../assets/logo.avif';
import wallpaper from '../../assets/wallpaper.avif';

const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div
      className="flex flex-col md:flex-row min-h-screen transition-all duration-500 ease-in-out bg-cover bg-center md:bg-none"
      style={{ backgroundImage: `url(${wallpaper})` }}
    >
      {/* Left Section - Form - Using black background in both themes */}
      <div
        className={`w-full md:w-1/2 flex flex-col justify-center p-8 min-h-screen bg-black/10 md:bg-black text-white backdrop-blur-sm md:backdrop-blur-none`}
      >
        {/* Logo - Now positioned absolutely at the top */}
        <div className="absolute top-8 left-8">
          <a
            href="https://www.nininails.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} alt="Logo" className="h-12" />
          </a>
        </div>

        <div className="flex-grow flex flex-col justify-center max-w-md mx-auto w-full my-auto py-16">
          {isLogin ? <LoginForm /> : <RegisterForm />}

          {/* Toggle Between Login/Signup */}
          <div className="mt-8 text-center">
            <p className="text-gray-300">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
              <button
                onClick={toggleForm}
                className="hover:underline ml-2 font-medium transition-all duration-300 ease-in-out text-blue-400 hover:text-blue-300"
              >
                {isLogin ? 'Sign up' : 'Login'}
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Right Section - Wallpaper (only visible on medium+ screens) */}
      <div
        className="hidden md:block w-1/2 bg-cover bg-center"
        style={{ backgroundImage: `url(${wallpaper})` }}
      />
    </div>
  );
};

export default AuthForm;
