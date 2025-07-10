'use client'

import React from 'react'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-900 text-white scroll-smooth">
      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Website</h1>
        <p className="text-xl text-gray-300 mb-8">A clean and simple React + Next.js single-page site</p>
        <a href="#about" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full transition">Get Started</a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-6">About Me</h2>
        <p className="max-w-2xl mx-auto text-gray-300 text-center">
          I'm a passionate developer building modern web apps using React, Next.js, and Tailwind CSS.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {['Project One', 'Project Two', 'Project Three'].map((title, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition transform shadow-lg">
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-400">A short description about the project and what it does.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-6">Contact</h2>
        <div className="max-w-xl mx-auto text-center text-gray-300">
          <p>Email: your@email.com</p>
          <p>LinkedIn: /yourprofile</p>
          <p>GitHub: /yourgithub</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 bg-gray-900 border-t border-gray-700">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </main>
  )
}
