import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Search, GraduationCap, User, BookOpen } from 'lucide-react';

const HomePage = () => {
  // Sample blog posts data - you can replace this with your actual data
  const blogPosts = [
    {
      id: 1,
      title: "Learning to Code with Claude AI",
      excerpt: "A journey through programming with AI assistance, exploring how artificial intelligence can enhance the learning experience...",
      date: "Feb 23, 2025",
      readTime: "10 min",
      image: "https://miro.medium.com/v2/resize:fit:1358/1*ADq8XuNtK0-8lfkrFcF2Nw.jpeg",
      category: "Programming"
    },
    {
      id: 2,
      title: "Understanding Next.js and React",
      excerpt: "Dive deep into modern web development with Next.js and React, exploring best practices and advanced techniques...",
      date: "Feb 20, 2025",
      readTime: "8 min",
      image: "https://hiu.vn/wp-content/uploads/2023/05/1644864897-next-framework.jpg",
      category: "Web Development"
    },
    {
      id: 3,
      title: "The Future of AI in Education",
      excerpt: "Exploring how artificial intelligence is transforming educational approaches and learning methodologies...",
      date: "Feb 18, 2025",
      readTime: "12 min",
      image: "https://phswasco.com/wp-content/uploads/2024/02/AI-in-Education.webp",
      category: "Education"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
      {/* Student Information Header */}
      <div className="bg-gray-800/50 border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-3">
              <GraduationCap size={24} className="text-emerald-400" />
              <div>
                <h2 className="text-xl font-semibold text-emerald-400">Mr Sitthiphone PHOUTTAVONG</h2>
                <div className="flex items-center gap-4 text-gray-400 mt-1">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    <span>Student Code: 205N0086/21</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} />
                    <span>Class: 4CS1</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Welcome to My Tech Blog
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Exploring the intersection of artificial intelligence, programming, and modern web development. Join me on this learning journey.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full bg-gray-800/50 border border-gray-700 rounded-lg py-3 px-4 pl-12 text-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">Featured Post</h2>
          <Link href="/my-blog/learning-to-code-with-claude" className="block group">
            <div className="relative rounded-xl overflow-hidden bg-gray-800/50 border border-gray-700 hover:border-emerald-400/50 transition-colors">
              <div className="aspect-video relative">
                <Image
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-emerald-400/10 rounded-full text-sm text-emerald-400">
                    {blogPosts[0].category}
                  </span>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={16} />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock size={16} />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-emerald-400 transition-colors">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-2 text-emerald-400">
                  <span>Read more</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Recent Posts Grid */}
        <div>
          <h2 className="text-2xl font-semibold mb-8">Recent Posts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map(post => (
              <Link key={post.id} href={`/blog/${post.id}`} className="block group">
                <div className="rounded-xl overflow-hidden bg-gray-800/50 border border-gray-700 hover:border-emerald-400/50 transition-colors h-full">
                  <div className="aspect-video relative">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-emerald-400/10 rounded-full text-sm text-emerald-400">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-emerald-400 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800/50 border-t border-gray-700 mt-24">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="text-center text-gray-400">
            <p>© 2025 Tech Blog. All rights reserved.</p>
            <p className="mt-2">Created by Mr Sitthiphone PHOUTTAVONG</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;