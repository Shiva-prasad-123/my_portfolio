import { useState } from "react";
import profileImg from "./assets/profile.jpg";

export default function App() {
  return (
    <div className="font-sans min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gray-800 shadow-md py-4 px-6 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-white">Shiva Prasad</h1>
          <nav className="space-x-6 text-lg">
            <a href="#about" className="text-gray-300 hover:text-blue-400 transition">About</a>
            <a href="#skills" className="text-gray-300 hover:text-blue-400 transition">Skills</a>
            <a href="#projects" className="text-gray-300 hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400 transition">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section id="about" className="mb-20">
          <h2 className="text-4xl font-bold mb-4 border-b-2 border-blue-500 inline-block">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-8 mt-6">
            <img
              src={profileImg}
              alt="Shiva Prasad"
              className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-md"
            />
            <p className="text-xl leading-relaxed text-gray-300">
              I'm a passionate software developer skilled in React, Node.js, and the full MERN stack. I focus on building clean, scalable, and user-friendly web applications. I'm currently looking for roles where I can contribute and grow in a dynamic tech team.
            </p>
          </div>
        </section>

        <section id="skills" className="mb-20">
          <h2 className="text-4xl font-bold mb-4 border-b-2 border-blue-500 inline-block">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-lg mt-6">
            {['React', 'Node.js', 'JavaScript', 'HTML & CSS', 'MongoDB', 'Git & GitHub', 'Tailwind CSS', 'Express.js'].map(skill => (
              <span key={skill} className="bg-gray-800 px-4 py-2 rounded shadow text-center">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-20">
          <h2 className="text-4xl font-bold mb-4 border-b-2 border-blue-500 inline-block">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-6 bg-gray-800 rounded-lg shadow hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-white">Portfolio Website</h3>
              <p className="mt-3 text-gray-400">A responsive portfolio site to showcase my skills, experience, and projects. Built with React, Vite, and Tailwind CSS.</p>
              <a href="#" className="inline-block mt-4 text-blue-400 hover:underline">View Project</a>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg shadow hover:shadow-xl transition">
              <h3 className="text-2xl font-bold text-white">Task Manager App</h3>
              <p className="mt-3 text-gray-400">A full-stack MERN app to manage daily tasks. Includes user authentication, CRUD operations, and responsive UI.</p>
              <a href="#" className="inline-block mt-4 text-blue-400 hover:underline">View Project</a>
            </div>
          </div>
        </section>

        <section id="contact">
          <h2 className="text-4xl font-bold mb-4 border-b-2 border-blue-500 inline-block">Contact</h2>
          <p className="text-lg mt-4 text-gray-300">I'd love to connect and explore opportunities to work together.</p>
          <ul className="mt-4 space-y-2">
            <li>Email: <a href="mailto:shivaprasadguj409@gmail.com" className="text-blue-400 hover:underline">shivaprasadguj409@gmail.com</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/feed/" className="text-blue-400 hover:underline">linkedin.com/in/yourprofile</a></li>
            <li>GitHub: <a href="https://github.com/Shiva-prasad-123" className="text-blue-400 hover:underline">github.com/Shiva-prasad-123</a></li>
          </ul>
        </section>
      </main>

      <footer className="bg-gray-800 text-center p-4 mt-20 border-t border-gray-700 text-gray-400">
        <p>&copy; 2025 Shiva Prasad. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
