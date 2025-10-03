// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative z-50">
      {/* Background */}
      <div className="backdrop-blur-xl bg-gradient-to-b text-left from-gray-900 via-gray-800 to-gray-900 border-t border-white/10">
        
        {/* Top Section */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-4 tracking-tight">IdeaVerse</h2>
            <p className="text-gray-400 leading-relaxed text-sm max-w-xs">
              Share your ideas anonymously and let the community upvote what truly matters.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <FaTwitter className="text-gray-400 hover:text-blue-400 transition-colors" size={22} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="text-gray-400 hover:text-blue-500 transition-colors" size={22} />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub className="text-gray-400 hover:text-gray-200 transition-colors" size={22} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Product</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-white transition">Home</Link></li>
              <li><Link to="/ideas" className="hover:text-white transition">Ideas</Link></li>
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#careers" className="hover:text-white transition">Careers</a></li>
              <li><a href="#blog" className="hover:text-white transition">Blog</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4 max-w-xs">
              Get the latest updates, launches, and community news.
            </p>
            <form className="flex flex-col sm:flex-row items-start sm:items-center bg-white/5 rounded-lg overflow-hidden border border-white/10 focus-within:ring-2 focus-within:ring-blue-500">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 w-full px-3 py-2 bg-transparent text-sm text-white placeholder-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 py-6 px-6 md:px-12">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-gray-500">
            <p>© {new Date().getFullYear()} <span className="text-white font-semibold">IdeaVerse</span>. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#privacy" className="hover:text-white transition">Privacy</a>
              <a href="#terms" className="hover:text-white transition">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
