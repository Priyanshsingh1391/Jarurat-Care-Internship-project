import React, { useState, useCallback, useEffect } from 'react';


const App = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [statusMessage, setStatusMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  
  const colors = {
    primary: '#0d9488', 
    secondary: '#f0fdfa', 
    accent: '#14b8a6', 
  };
  
  
  useEffect(() => {
    if (!document.querySelector('script[src*="cdn.tailwindcss.com"]')) {
      const script = document.createElement('script');
      script.src = 'https://cdn.tailwindcss.com';
      script.onload = () => {
       
        if (window.tailwind && window.tailwind.config) {
            window.tailwind.config = {
                theme: {
                    extend: {
                        fontFamily: {
                            sans: ['Inter', 'sans-serif'],
                        },
                        colors: {
                            'primary': '#0d9488',
                            'secondary': '#f0fdfa',
                            'accent': '#14b8a6',
                        }
                    }
                }
            };
        }
      };
      document.head.appendChild(script);
    }
  }, []);
 

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

 
  const handleSubmit = useCallback((e) => {
    e.preventDefault();

 
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Please fill out all fields.');
      setIsSuccess(false);
      return;
    }

    // Simulate API submission delay
    setStatusMessage('Sending message...');
    setIsSuccess(false);

    setTimeout(() => {
      
      setStatusMessage('Thank you! Your message has been received.');
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      
      setTimeout(() => {
        setStatusMessage('');
      }, 5000);
    }, 1500);

  }, [formData]);


  const FeatureCard = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 border-t-4 border-accent">
      <div className="text-3xl text-accent mb-4">
        {icon}
      </div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );

 
  const BookIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5V15a2.5 2.5 0 0 0 5 0V19.5"/><path d="M10 19.5V15a2.5 2.5 0 0 0 5 0V19.5"/><path d="M16 19.5V15a2.5 2.5 0 0 0 5 0V19.5"/><path d="M22 19.5H2"/><path d="M22 21.5H2"/></svg>
  );

  
  const UsersIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  );


  const HeartIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
  );
  

  const MenuIcon = (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
  );

  return (
    <div className="bg-gray-50 text-gray-800 antialiased min-h-screen">
      <style jsx global>{`
        /* Global styles for font and scrollbar, specific to this React file context */
        body {
            font-family: 'Inter', sans-serif;
        }
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-thumb {
            background: ${colors.primary};
            border-radius: 10px;
        }
      `}</style>

      {/* Header & Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold" style={{ color: colors.primary }}>
            WeCare 
          </h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-accent transition duration-150">About Us</a>
            <a href="#support" className="text-gray-600 hover:text-accent transition duration-150">Resources</a>
            <a href="#contact" className="px-3 py-1 text-white rounded-full hover:bg-accent transition duration-150" style={{ backgroundColor: colors.primary }}>Contact</a>
          </nav>
          {/* Mobile Menu Placeholder */}
          <button className="md:hidden text-gray-600 hover:text-accent">
            {MenuIcon}
          </button>
        </div>
      </header>

      {/* 1. Landing Page / Hero Section */}
      <section className="relative overflow-hidden" style={{ backgroundColor: colors.primary }}>
        {/* Banner Image Placeholder */}
        <div className="absolute inset-0 opacity-20">
          <img src="https://placehold.co/1920x600/0f766e/ffffff?text=Symbol+of+Hope"
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/1920x600/0f766e/ffffff?text=Support+Banner'; }}
            alt="Symbol of Hope and Support"
            className="w-full h-full object-cover filter brightness-75"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-32 lg:py-40 text-center text-white">
          <div className="backdrop-blur-sm bg-black/10 rounded-xl p-6 inline-block">
            <h2 className="text-5xl sm:text-7xl font-extrabold mb-4 leading-tight">
              You Are Not Alone.
            </h2>
            <p className="text-xl sm:text-2xl font-light max-w-3xl mx-auto">
              Fighting cancer takes strength, but finding support shouldn't. We provide resources, community, and courage for every step of the journey.
            </p>
            <div className="mt-8">
              <a href="#contact" className="inline-block bg-white text-primary px-8 py-3 rounded-full text-lg font-semibold shadow-xl hover:bg-secondary transition duration-300 transform hover:scale-105" style={{ color: colors.primary }}>
                Get Support Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About/Support Section */}
      <section id="about" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">Our Mission</h3>
            <p className="text-lg text-gray-600">Committed to awareness, prevention, and compassionate care.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={BookIcon}
              title="Education & Prevention"
              description="Providing up-to-date information on early detection, screening guidelines, and lifestyle choices."
            />
            <FeatureCard
              icon={UsersIcon}
              title="Community Connection"
              description="Connecting survivors, patients, and caregivers through online forums and local support groups."
            />
            <FeatureCard
              icon={HeartIcon}
              title="Emotional Wellness"
              description="Offering resources for mental health and coping strategies during and after treatment."
            />
          </div>
        </div>
      </section>

      {/* 2. Contact Form Section */}
      <section id="contact" className="py-16 sm:py-24" style={{ backgroundColor: colors.secondary }}>
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-2xl">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Get In Touch</h3>
            <p className="text-center text-gray-600 mb-8">We're here to listen. Send us a message and we'll connect you with the right support.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-accent focus:border-accent transition duration-150"
                  placeholder="Jane Doe"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-accent focus:border-accent transition duration-150"
                  placeholder="you@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-accent focus:border-accent transition duration-150"
                  placeholder="I am looking for resources for..."
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-accent transition duration-300 transform hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-opacity-50"
                  style={{ backgroundColor: colors.primary, boxShadow: `0 4px 6px -1px rgba(13, 148, 136, 0.1), 0 2px 4px -2px rgba(13, 148, 136, 0.1)` }}
                  disabled={statusMessage === 'Sending message...'}
                >
                  {statusMessage === 'Sending message...' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>

            {/* Status Message Area */}
            {statusMessage && (
              <p
                id="status-message"
                className={`text-center text-sm mt-4 font-medium transition-opacity duration-500 ${isSuccess ? 'text-primary' : 'text-red-600'}`}
                style={{ color: isSuccess ? colors.primary : '#dc2626', fontWeight: 'bold' }}
              >
                {statusMessage}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4">
            <a href="#" className="text-gray-400 hover:text-accent mx-3">Privacy Policy</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-400 hover:text-accent mx-3">Terms of Use</a>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; 2024 Hope & Strength Awareness. This site is for informational purposes only and does not provide medical advice.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;