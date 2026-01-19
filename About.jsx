import React from 'react';

const About = () => {
  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'Frontend Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      bio: 'Expert in React and modern JavaScript frameworks.'
    },
    {
      name: 'Sarah Miller',
      role: 'UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w-400&h=400&fit=crop',
      bio: 'Passionate about creating beautiful user experiences.'
    },
    {
      name: 'David Chen',
      role: 'Full Stack Developer',
      image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005-128?w=400&h=400&fit=crop',
      bio: 'Specializes in scalable web applications.'
    },
    {
      name: 'Maria Garcia',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
      bio: 'Ensures projects are delivered on time and on budget.'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container px-4 mx-auto">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-6 text-5xl font-bold text-gray-900">About Us</h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            We're passionate about building exceptional web experiences using the latest technologies.
          </p>
        </div>

        {/* Company Story */}
        <div className="grid items-center grid-cols-1 gap-12 mb-20 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-4xl font-bold">Our Story</h2>
            <p className="mb-6 text-lg text-gray-600">
              Founded in 2020, ReactRoute began as a small team of developers passionate about 
              creating elegant solutions to complex problems. Our journey started with a simple 
              idea: make web development more accessible and enjoyable.
            </p>
            <p className="mb-6 text-lg text-gray-600">
              Today, we've grown into a full-service development agency, but we've never lost 
              our passion for clean code, beautiful design, and user-focused solutions.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Our Office" 
              className="shadow-2xl rounded-2xl"
            />
            <div className="absolute p-6 text-white shadow-xl -bottom-6 -right-6 bg-primary rounded-xl">
              <div className="text-2xl font-bold">4+ Years</div>
              <div className="text-lg">of Excellence</div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="mb-12 text-4xl font-bold text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center card">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="object-cover w-32 h-32 mx-auto mb-4 border-4 border-gray-100 rounded-full"
                />
                <h3 className="mb-2 text-xl font-bold">{member.name}</h3>
                <div className="mb-3 font-medium text-primary">{member.role}</div>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="p-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl">
          <h2 className="mb-12 text-4xl font-bold text-center">Our Values</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl text-white rounded-full bg-primary">
                💡
              </div>
              <h3 className="mb-3 text-2xl font-bold">Innovation</h3>
              <p className="text-gray-600">
                We constantly explore new technologies and approaches to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl text-white rounded-full bg-primary">
                🤝
              </div>
              <h3 className="mb-3 text-2xl font-bold">Collaboration</h3>
              <p className="text-gray-600">
                We believe in working closely with our clients to understand their vision and goals.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl text-white rounded-full bg-primary">
                🎯
              </div>
              <h3 className="mb-3 text-2xl font-bold">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every project, paying attention to every detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;