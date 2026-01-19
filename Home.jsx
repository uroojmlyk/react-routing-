import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Fast Performance',
      description: 'Lightning-fast page loads with React and optimized routing.'
    },
    {
      icon: '🎨',
      title: 'Beautiful UI',
      description: 'Modern, responsive design using Tailwind CSS.'
    },
    {
      icon: '🔒',
      title: 'Secure Routing',
      description: 'Protected routes and seamless navigation experience.'
    },
    {
      icon: '📱',
      title: 'Mobile Friendly',
      description: 'Fully responsive design that works on all devices.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container px-4 mx-auto text-center">
          <h1 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">
            Welcome to <span className="text-primary">ReactRoute</span>
          </h1>
          <p className="max-w-3xl mx-auto mb-10 text-xl text-gray-600">
            A beautifully crafted React application with routing, modern UI components, 
            and responsive design using Tailwind CSS.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/about" className="px-8 py-3 text-lg btn-primary">
              Learn More
            </Link>
            <Link to="/contact" className="px-8 py-3 text-lg font-medium transition-all duration-300 bg-white border-2 rounded-lg text-primary border-primary hover:bg-gray-50">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-center">Amazing Features</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div key={index} className="card">
                <div className="mb-4 text-4xl">{feature.icon}</div>
                <h3 className="mb-3 text-2xl font-bold">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white bg-gradient-to-r from-primary to-secondary">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-6 text-4xl font-bold">Ready to Get Started?</h2>
          <p className="max-w-2xl mx-auto mb-10 text-xl">
            Join thousands of developers building amazing applications with React and Tailwind CSS.
          </p>
          <Link to="/login" className="px-10 py-4 text-lg font-bold transition-all duration-300 bg-white rounded-lg text-primary hover:bg-gray-100">
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;