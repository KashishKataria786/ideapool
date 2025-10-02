import React, { useEffect, useState, useCallback } from "react";
import Layout from "../components/Layout/Layout";
import bgImage from "../assets/3.webp"; 
import IdeaCard from "../components/ui/IdeaCard";
import axios from "axios";
import Spinner from "../components/ui/Spinner";
import { toast } from "react-toastify";
import { IoArrowUpCircleSharp } from "react-icons/io5";
const IdeasPage = () => {
  const [ideas, setIdeas] = useState([]);
  const [form, setForm] = useState({ title: "", description: "", email: "" });

  const fetchData = useCallback(async () => {
    try {
      const res = await fetch("http://localhost:5000/api/ideas");
      const data = await res.json();
      setIdeas(data);
    } catch (error) {
      console.error("Error fetching ideas:", error);
    }
  }, []);


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddIdea = async (e) => {
    e.preventDefault();

    const { title, description, email } = form;
    if (!title || !description || !email) {
      toast.warning("Missing Fields");
      return;
    }

    try {
      await axios.post("http://localhost:5000/api/add-idea", form);
      setForm({ title: "", description: "", email: "" }); 
      fetchData(); 
    } catch (error) {
      console.error("Error adding idea:", error);
    }
  };

const upvote = async (id) => {
  if (!id) return;

  try {
    const { data } = await axios.patch(`http://localhost:5000/api/upvote/${id}`);
    toast.success("Upvoted successfully!");
    return data; 
  } catch (error) {
    console.error("Error upvoting:", error);
    toast.error("Failed to upvote. Please try again.");
    return null;
  }
};


  useEffect(() => {
    fetchData();
  }, [fetchData, upvote]);

  return (
    <Layout>

      <div
        className="w-screen h-screen relative bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Scrollable Ideas Section */}
        <div className="scroll h-screen overflow-y-auto py-20">
          <div className="md:grid grid-cols-3 gap-4 max-w-[70vw] mx-auto">
            {ideas.length > 0 ? (
              ideas.map((item) => <IdeaCard key={item.id} idea={item} onUpvote={upvote} />)
            ) : (
              <Spinner/>
            )}
          </div>
        </div>

        {/* Fixed Input Bar */}
        <div className="fixed bottom-0 left-0 w-full flex justify-center z-40 pb-6">
          <form
            onSubmit={handleAddIdea}
            className="flex gap-2 bg-black/20 backdrop-blur-md p-4 rounded-lg shadow-lg max-w-5xl w-full mx-4"
          >
            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              className="flex-1 px-3 py-2 text-sm rounded-md border border-white/30 bg-white/70 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
            />
            {/* Title */}
            <input
              type="text"
              name="title"
              placeholder="Your Title"
              value={form.title}
              onChange={handleChange}
              className="flex-1 px-3 py-2 text-sm rounded-md border border-white/30 bg-white/70 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
            />
            {/* Description */}
            <input
              type="text"
              name="description"
              placeholder="Your idea..."
              value={form.description}
              onChange={handleChange}
              className="flex-2 px-3 py-2 text-sm rounded-md border border-white/30 bg-white/70 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900"
            />
            {/* Submit */}
            <button
              type="submit"
              className="p-2 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 shadow-md transition"
            >
             <IoArrowUpCircleSharp size={30}/>
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default IdeasPage;
