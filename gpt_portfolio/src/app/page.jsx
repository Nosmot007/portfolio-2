import React from 'react';

const Home = () => {
  return (
    <div className="text-white bg-gray-900">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center">
        <h2 className="text-5xl font-extrabold animate-fadeIn">
          Hi, I'm <span className="text-yellow-500">[Your Name]</span>
        </h2>
        <p className="text-2xl mt-4">Web Developer | Designer | Creator</p>
        <button className="mt-8 px-6 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition-all">
          Learn More
        </button>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen p-10 bg-gray-800 flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl font-bold mb-5">About Me</h2>
        <p className="max-w-2xl">
          I am a passionate web developer with a knack for creating stunning websites with crazy animations. Let's work together to bring your ideas to life!
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen p-10 bg-gray-900 flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl font-bold mb-5">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="project-card transform transition-all hover:scale-105 bg-gray-800 p-5 rounded-lg">
            <h3 className="text-xl font-bold">Project 1</h3>
            <p className="mt-2">A creative website design with unique animations.</p>
          </div>
          <div className="project-card transform transition-all hover:scale-105 bg-gray-800 p-5 rounded-lg">
            <h3 className="text-xl font-bold">Project 2</h3>
            <p className="mt-2">An innovative app development project.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen p-10 bg-gray-800 flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl font-bold mb-5">Contact Me</h2>
        <p className="mb-6">Feel free to reach out if you want to collaborate on any projects.</p>
        <button className="px-6 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition-all">
          Get In Touch
        </button>
      </section>
    </div>
  );
};

export default Home;
