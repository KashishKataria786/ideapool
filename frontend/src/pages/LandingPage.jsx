// LandingPage.jsx
import React, { useState, useEffect, useRef } from "react";
import bgImage from "../assets/3.webp"; 
import Layout from "../components/Layout/Layout";
import Footer from '../components/Layout/Footer.jsx'
import { FaUserSecret, FaUsers, FaBolt } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    title: "Anonymous Publishing",
    description: `Share your ideas without revealing your identity. Protect your privacy while still receiving honest feedback from the community. 
Experiment with new concepts freely without fear of judgment or exposure. 
This feature allows creators, thinkers, and innovators to express themselves boldly, test unconventional ideas, and engage in open-ended brainstorming without personal bias. 
Your identity remains private, giving you the freedom to innovate and iterate safely.`,
    img: "https://play-lh.googleusercontent.com/ai7FC9zp1bG8zLcl97w9rNde_oZ5s086XP1ZkBFdwf72d_owIiUVJu1-XNp6eOO-AGg",
  },
  {
    title: "Community Upvotes",
    description: `Let others upvote the best ideas democratically. Gain insights into what resonates most with the community and prioritize ideas that matter. 
Encourage collaboration and discussion around popular concepts, helping refine and improve them further. 
Upvotes reflect genuine interest, allowing the most impactful ideas to surface. 
This system ensures fairness and fosters a healthy, participatory environment for idea validation and growth.`,
    img: "https://tse1.mm.bing.net/th/id/OIP.2ZLJXYr82MaTUoM5jsRxQQHaGv?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    title: "Simple & Fast",
    description: `Publish your ideas in seconds with no hassle. Our intuitive interface is designed for speed and efficiency, so you can focus on creativity rather than complex workflows. 
Ideal for rapid idea testing, instant sharing, and quick feedback cycles. 
Whether you’re on desktop, tablet, or mobile, the platform ensures seamless publishing and tracking. 
Spend less time navigating and more time innovating, making idea sharing effortless and enjoyable for everyone.`,
    img: "https://tse3.mm.bing.net/th/id/OIP.ZbjoL-H0hh2AmLxOxBOeygHaEA?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
  },
];


const companies = [
  "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
];

const LandingPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const refs = useRef([]);
const featureIcons = [FaUserSecret, FaUsers, FaBolt];
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            setActiveIndex(idx);
          }
        });
      },
      { threshold: 0.5 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <div className="w-screen font-sans">
        {/* Hero Section with Parallax */}
        <section
  className="h-screen flex flex-col items-center justify-center text-center text-white bg-fixed bg-cover bg-center relative"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/50"></div>

  <div className="relative z-10 px-6 max-w-3xl">
    {/* Animated Heading */}
    <motion.h1
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-3xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-lg"
    >
      Publish Ideas. Get Upvotes. Stay Anonymous.
    </motion.h1>

    {/* Animated Paragraph */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed drop-shadow-sm"
    >
      A clean platform to share your thoughts, receive honest feedback, and empower creativity through anonymous publishing.
    </motion.p>

    {/* Call-to-Action Button */}
    <motion.a
      href="/app"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.6 }}
      className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition"
    >
      Start Publishing
    </motion.a>
  </div>

  {/* Optional: subtle floating effect */}
  <motion.div
    className="absolute inset-0"
    initial={{ y: 0 }}
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  ></motion.div>
</section>

        <section className="bg-gray-50 py-12">
          <h3 className="text-center text-lg md:text-xl font-semibold text-gray-700 mb-8">
            Trusted by creators and teams worldwide
          </h3>
          <div className="overflow-hidden relative w-full">
            <div className="flex animate-marquee space-x-12">
              {companies.concat(companies).map((logo, idx) => (
                <img
                  key={idx}
                  src={logo}
                  alt="client logo"
                  className="h-12 md:h-16 object-contain"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
<section className="bg-gradient-to-b from-gray-50 to-white py-20">
  <div className="container mx-auto px-4 sm:px-6 lg:px-12">
    {/* Section Heading */}
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
        Our Key Features
      </h2>
      <p className="text-gray-600 mt-4 text-lg leading-relaxed">
        Discover the tools and innovations designed to give you a seamless and
        impactful experience. Each feature is crafted with attention to detail.
      </p>
    </div>

    {/* Features Grid */}
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden flex flex-col transition"
        >
          {/* Image */}
          <div className="relative h-48 md:h-56">
            <img
              src={feature.img}
              alt={feature.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute top-4 left-4 bg-gradient-to-tr from-blue-600 to-purple-600 text-white p-3 rounded-xl shadow-lg">
              {React.createElement(featureIcons[index], { size: 22 })}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed flex-grow">
              {feature.description}
            </p>
            <div className="mt-6">
              <a
                href="#"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition"
              >
                Learn more →
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>



        {/* Clients/Companies Marquee */}
        

        {/* Footer */}
        <Footer/>
      </div>
    </Layout>
  );
};

export default LandingPage;
