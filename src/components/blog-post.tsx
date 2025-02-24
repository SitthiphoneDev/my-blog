import React from 'react';
import Image from 'next/image';
import { Calendar, Clock, Share2, GraduationCap, User, BookOpen } from 'lucide-react';

const BlogPost = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100">
            {/* Student Information Header */}
            <div className="bg-gray-800/50 border-b border-gray-700">
                <div className="max-w-4xl mx-auto px-4 py-6">
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

            <div className="max-w-4xl mx-auto px-4 py-12">
                {/* Header Section */}
                <div className="space-y-6 mb-12">
                    <div className="flex items-center gap-4 text-emerald-400">
                        <span className="px-3 py-1 bg-emerald-400/10 rounded-full text-sm">Tutorial</span>
                        <span className="px-3 py-1 bg-emerald-400/10 rounded-full text-sm">Programming</span>
                    </div>

                    <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                        Learning to Code with Claude AI
                    </h1>

                    {/* Meta Information */}
                    <div className="flex items-center gap-6 text-gray-400">
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>Feb 23, 2025</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock size={16} />
                            <span>10 min read</span>
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="relative mb-12 w-full h-96">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-xl z-10" />
                    <Image
                        src="https://miro.medium.com/v2/resize:fit:1358/1*ADq8XuNtK0-8lfkrFcF2Nw.jpeg"
                        alt="AI Programming Concept"
                        fill
                        priority
                        quality={100}
                        className="object-cover rounded-xl shadow-2xl"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    />
                </div>

                {/* Content */}
                <div className="prose prose-lg prose-invert max-w-none">
                    <p className="text-xl font-medium leading-relaxed">
                        The soft glow of the laptop screen illuminated Sarah's frustrated face as she stared at yet another cryptic Python error message. It was 1 AM in the university library, and her recursive function homework was due in eight hours. Coffee cups littered her desk, Stack Overflow tabs overwhelmed her browser, and her eyes burned from staring at brackets and parentheses that refused to match up.
                    </p>

                    <div className="my-8 p-6 bg-gray-800/50 rounded-xl border border-gray-700">
                        <p className="text-lg italic text-gray-300">
                            "It's like having a patient mentor who never gets tired of your questions. But the key is, I don't just ask for solutions. I've learned to think through problems first, then use AI to validate my understanding or guide me when I'm stuck."
                        </p>
                    </div>

                    <p>
                        "I can't fail this assignment," she muttered, running her fingers through her messy hair. Her roommate had mentioned something about AI coding assistants, but Sarah had been skeptical. After all, wasn't using AI like cheating? But desperate times called for desperate measures, and that's how she found Claude.
                    </p>

                    <p>
                        "Hi, I need help with Python recursion," she typed hesitantly. To her surprise, instead of just giving her code snippets, Claude responded with a question: "Let's understand what you know about recursion first. Could you explain your current understanding?"
                    </p>

                    <p>
                        That first conversation changed everything. As Sarah explained her confusion about base cases and recursive calls, Claude guided her through the concepts, using analogies that finally made sense. "Think of recursion like those Russian nesting dolls," Claude suggested. "Each doll contains a smaller version of itself until you reach the smallest doll - that's your base case."
                    </p>

                    <div className="my-8 grid grid-cols-2 gap-6">
                        <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
                            <h3 className="text-lg font-semibold mb-2 text-emerald-400">Key Learning Points</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-300">
                                <li>Understanding recursion fundamentals</li>
                                <li>Debugging complex code</li>
                                <li>Best practices in programming</li>
                            </ul>
                        </div>
                        <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
                            <h3 className="text-lg font-semibold mb-2 text-emerald-400">Skills Developed</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-300">
                                <li>Problem-solving approach</li>
                                <li>Code documentation</li>
                                <li>Technical communication</li>
                            </ul>
                        </div>
                    </div>

                    <p>
                        The next few weeks became a transformative journey. Sarah found herself spending hours with Claude, not just fixing bugs but understanding why they occurred. Her questions evolved from "How do I fix this?" to "Why isn't this working?" and "How could I prevent this problem in the future?"
                    </p>

                    {/* Story Milestone Section */}
                    <div className="my-8 p-6 bg-gray-800/50 rounded-xl border border-gray-700">
                        <h3 className="text-lg font-semibold text-emerald-400 mb-4">Learning Milestones</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <div className="w-2 h-2 mt-2 rounded-full bg-emerald-400"></div>
                                <p className="text-gray-300 flex-1">From fixing bugs to understanding root causes</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-2 h-2 mt-2 rounded-full bg-emerald-400"></div>
                                <p className="text-gray-300 flex-1">Learning security best practices and design patterns</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-2 h-2 mt-2 rounded-full bg-emerald-400"></div>
                                <p className="text-gray-300 flex-1">Developing structured problem-solving approaches</p>
                            </div>
                        </div>
                    </div>

                    <p>
                        During a particularly challenging database project, Sarah caught herself explaining SQL injection vulnerabilities to her study group. They looked at her with surprise - when had she become so knowledgeable? She smiled, thinking about the late-night discussions with Claude about security best practices and database design patterns.
                    </p>

                    <div className="my-8 p-6 bg-indigo-500/10 rounded-xl border border-indigo-400/20">
                        <p className="text-xl italic text-indigo-300">
                            "It's like having a patient mentor who never gets tired of your questions. But the key is, I don't just ask for solutions. I've learned to think through problems first, then use AI to validate my understanding or guide me when I'm stuck."
                        </p>
                    </div>

                    <p>
                        Her professors noticed the change too. Her code became more elegant, her documentation clearer, and her problem-solving approach more structured. During code reviews, she could confidently explain every decision in her programs.
                    </p>

                    {/* Interview Scene */}
                    <div className="my-8 p-6 bg-gray-800/50 rounded-xl">
                        <p className="text-gray-400 mb-4">The turning point came during her internship interview at a local tech startup. The interviewer raised an eyebrow at her mentioning AI as a learning tool.</p>

                        <div className="space-y-4 ml-4 border-l-2 border-gray-700 pl-4">
                            <p className="italic text-gray-400">"Isn't AI just a crutch?" he asked skeptically.</p>

                            <p className="text-gray-300">Sarah straightened in her chair. "Actually, it's quite the opposite," she replied. "Working with Claude taught me how to think like a programmer. When you have a tool that helps you understand concepts instead of just giving you answers, it transforms how you learn."</p>
                        </div>
                    </div>

                    <p>
                        She pulled out her laptop and showed him her learning journal - detailed notes from her conversations with Claude, complete with diagrams, code snippets, and explanations. The interviewer's skepticism turned to interest as she demonstrated how she used AI to deepen her understanding rather than bypass it.
                    </p>

                    {/* Final Section */}
                    <div className="mt-12 space-y-6">
                        <p className="text-lg text-gray-300">
                            Six months later, Sarah sat at her intern desk, working on her first major feature for the startup's app. When she encountered a tricky edge case in her implementation, she didn't panic. Instead, she opened her familiar chat window: "Hi Claude, ready to explore something interesting?"
                        </p>

                        <p className="text-lg font-medium text-emerald-400">
                            As she typed out her question, she realized how far she'd come from that frustrated student in the library. AI hadn't made her journey easier - it had made it richer, deeper, and infinitely more rewarding. She wasn't just learning to code; she was learning how to learn, one conversation at a time.
                        </p>
                    </div>
                </div>

                {/* Share Section */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex items-center justify-between">
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold">Share this article</h3>
                            <p className="text-gray-400">Help others discover this guide</p>
                        </div>
                        <div className="flex gap-4">
                            <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                                <Share2 size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;