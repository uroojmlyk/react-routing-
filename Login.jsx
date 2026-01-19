import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle authentication here
    alert(isLogin ? 'Login successful!' : 'Registration successful!');
    setFormData({ email: '', password: '', name: '', confirmPassword: '' });
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-12 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-md mx-4">
        {/* Logo */}
        <div className="mb-8 text-center">
          <Link to="/" className="flex items-center justify-center space-x-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-primary to-accent">
              <span className="text-2xl font-bold text-white">R</span>
            </div>
            <span className="text-3xl font-bold text-gray-900">ReactRoute</span>
          </Link>
        </div>

        {/* Toggle */}
        <div className="p-2 mb-8 bg-white shadow-lg rounded-xl">
          <div className="flex">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 px-4 rounded-lg font-medium text-lg transition-all duration-300 ${
                isLogin 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 px-4 rounded-lg font-medium text-lg transition-all duration-300 ${
                !isLogin 
                  ? 'bg-primary text-white shadow-md' 
                  : 'text-gray-600 hover:text-primary'
              }`}
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* Form Card */}
        <div className="card">
          <h2 className="mb-8 text-3xl font-bold text-center">
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block mb-2 text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required={!isLogin}
                  className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>
            )}

            <div>
              <label className="block mb-2 text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block mb-2 text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your password"
              />
            </div>

            {!isLogin && (
              <div>
                <label className="block mb-2 text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required={!isLogin}
                  className="w-full px-4 py-3 transition-all border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Confirm your password"
                />
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 rounded text-primary focus:ring-primary" />
                  <span className="ml-2 text-gray-600">Remember me</span>
                </label>
                <Link to="#" className="font-medium text-primary hover:text-secondary">
                  Forgot password?
                </Link>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-4 text-lg btn-primary"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-8">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-gray-500">Or continue with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {['Google', 'GitHub', 'Twitter'].map((provider) => (
              <button
                key={provider}
                className="flex items-center justify-center p-3 transition-colors border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                <span className="mr-2">{provider === 'Google' ? 'G' : provider.charAt(0)}</span>
                {provider}
              </button>
            ))}
          </div>

          {/* Terms */}
          {!isLogin && (
            <p className="mt-6 text-sm text-center text-gray-500">
              By creating an account, you agree to our 
              <Link to="#" className="mx-1 text-primary hover:text-secondary">Terms</Link>
              and
              <Link to="#" className="ml-1 text-primary hover:text-secondary">Privacy Policy</Link>
            </p>
          )}

          {/* Switch Mode */}
          <p className="mt-8 text-center text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 font-medium text-primary hover:text-secondary"
            >
              {isLogin ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
          <Link to="/" className="text-gray-600 transition-colors hover:text-primary">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;