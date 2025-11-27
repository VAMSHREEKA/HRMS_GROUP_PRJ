import { useState } from 'react';

const FeedPage1 = ({ onNavigateBack }) => {
    return (
        <div className="p-4 sm:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <button
                            onClick={onNavigateBack}
                            className="text-gray-600 hover:text-gray-800 mb-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <h1 className="text-xl font-bold text-[#266ECD]">Feed</h1>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left/Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Post 1 - Martin Swanson */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-orange-400 to-pink-500 flex items-center justify-center">
                                        <img src="https://i.pravatar.cc/150?img=12" alt="MS" className="w-full h-full rounded-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-gray-900">
                                            <span className="font-semibold">Martin Swanson</span> gave{' '}
                                            <span className="font-semibold">130 points</span> to{' '}
                                            <span className="font-semibold">Rosia Thorpe</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-gray-400 text-sm">4h ago</span>
                                    <button className="text-gray-400 hover:text-gray-600">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Points Card */}
                            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-4 relative overflow-hidden shadow-md">
                                <div className="relative z-10">
                                    <p className="text-gray-800 text-base mb-4 leading-relaxed">
                                        Thanks for leading one of the most productive design sprints ever, Rosia. Great win for the team
                                        and even greater outcome for the challenge.
                                    </p>
                                    <div className="flex gap-2 mb-6">
                                        <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full font-medium">
                                            #BornLeader
                                        </span>
                                        <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1.5 rounded-full font-medium">
                                            #Goodworker
                                        </span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[#266ECD] text-6xl font-bold leading-none">130</div>
                                        <div className="text-gray-500 text-2xl font-light">Points</div>
                                    </div>
                                </div>
                            </div>

                            {/* Reactions */}
                            <div className="flex items-center gap-4 text-gray-600">
                                <button className="flex items-center gap-2 text-red-500 hover:text-red-600">
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                                        <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                    </svg>
                                </button>
                                <button className="flex items-center gap-2 hover:text-gray-800">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                    <span className="text-sm font-medium">3</span>
                                </button>
                            </div>
                        </div>

                        {/* Comment Input */}
                        <div className="bg-white rounded-xl shadow-md p-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                                <input
                                    type="text"
                                    placeholder="Write a comment..."
                                    className="flex-1 bg-gray-50 border-0 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#266ECD]"
                                />
                            </div>
                        </div>

                        {/* Post 2 - Clarence Gale */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-green-400 to-teal-500">
                                        <img src="https://i.pravatar.cc/150?img=33" alt="CG" className="w-full h-full rounded-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Clarence Gale</p>
                                        <p className="text-sm text-gray-500">2h ago</p>
                                    </div>
                                </div>
                                <button className="text-gray-400 hover:text-gray-600">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-gray-700 mb-4 leading-relaxed">
                                Had an amazing experience working on the sprint and Rosia was a great manager. Learned a lot from her.
                                Thanks for all the support and guidance.
                            </p>
                            <div className="flex items-center gap-4 text-gray-600">
                                <button className="flex items-center gap-2 hover:text-red-500">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                                <button className="flex items-center gap-2 hover:text-gray-800">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </button>
                            </div>
                            <button className="text-[#266ECD] text-sm font-medium mt-3 hover:underline">2 more comments</button>
                        </div>

                        {/* Birthday Wishes - OM Raut */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-orange-400 to-red-500">
                                        <img src="https://i.pravatar.cc/150?img=8" alt="OR" className="w-full h-full rounded-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">OM Raut</p>
                                    </div>
                                </div>
                                <button className="text-gray-400 hover:text-gray-600">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                    </svg>
                                </button>
                            </div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full bg-blue-400 border-2 border-white"></div>
                                    <div className="w-8 h-8 rounded-full bg-green-400 border-2 border-white"></div>
                                    <div className="w-8 h-8 rounded-full bg-purple-400 border-2 border-white"></div>
                                    <div className="w-8 h-8 rounded-full bg-pink-400 border-2 border-white"></div>
                                </div>
                                <span className="text-sm text-gray-700">
                                    <span className="font-medium">+ 8 more</span> wished Om a happy birthday.{' '}
                                    <button className="font-semibold text-gray-900 hover:underline">Wish him now!</button>
                                </span>
                            </div>
                            <button className="bg-[#266ECD] text-white px-8 py-2.5 rounded-lg font-semibold hover:brightness-95 transition shadow-md">
                                SEND
                            </button>
                        </div>

                        {/* Messages and Complaints */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white rounded-xl shadow-md p-6">
                                <h3 className="font-bold text-gray-900 mb-2 text-lg">Messages</h3>
                                <p className="text-sm text-gray-600 mb-4">Message from Manager</p>
                                <button className="bg-[#266ECD] text-white px-6 py-2.5 rounded-lg font-semibold hover:brightness-95 transition">
                                    Reply
                                </button>
                            </div>
                            <div className="bg-white rounded-xl shadow-md p-6">
                                <h3 className="font-bold text-gray-900 mb-2 text-lg">Complaints</h3>
                                <p className="text-sm text-gray-600 mb-4">Message To Office</p>
                                <button className="bg-[#266ECD] text-white px-6 py-2.5 rounded-lg font-semibold hover:brightness-95 transition">
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="space-y-6">
                        {/* Your Points Card */}
                        <div className="bg-white border border-gray-200 rounded-xl p-6 text-gray-900 shadow-md">
                            <h3 className="text-sm font-medium mb-3 opacity-90 text-gray-500">Your Points</h3>
                            <div className="text-6xl font-bold mb-4 text-[#266ECD]">1500</div>
                            <div className="flex gap-3">
                                <button className="flex-1 bg-white border border-[#266ECD] text-[#266ECD] px-4 py-2.5 rounded-lg text-sm font-bold hover:bg-gray-50 transition-all">
                                    SEND
                                </button>
                                <button className="flex-1 bg-[#266ECD] text-white px-4 py-2.5 rounded-lg text-sm font-bold hover:bg-opacity-90 transition-all">
                                    REDEEM
                                </button>
                            </div>
                        </div>

                        {/* Calendar */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-gray-900 text-lg">March</h3>
                                <button className="text-gray-400 hover:text-gray-600">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                    </svg>
                                </button>
                            </div>

                            {/* Days of week */}
                            <div className="grid grid-cols-7 gap-1 mb-3">
                                {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day, idx) => (
                                    <div key={day} className={`text-xs font-semibold text-center py-2 ${idx === 0 ? 'text-[#266ECD]' : 'text-gray-500'}`}>
                                        {day}
                                    </div>
                                ))}
                            </div>

                            {/* Calendar dates */}
                            <div className="grid grid-cols-7 gap-1 mb-4">
                                {[...Array(31)].map((_, i) => (
                                    <button
                                        key={i}
                                        className={`text-center py-2 text-sm rounded-lg transition-colors ${i === 6
                                            ? 'bg-[#266ECD] text-white font-bold shadow-md'
                                            : 'text-gray-700 hover:bg-gray-100'
                                            }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>

                            {/* Event Indicators */}
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                                    <div className="flex -space-x-1">
                                        <div className="w-5 h-5 rounded-full bg-blue-400 border border-white"></div>
                                        <div className="w-5 h-5 rounded-full bg-green-400 border border-white"></div>
                                    </div>
                                    <span className="text-xs text-gray-700 flex-1">Birthday</span>
                                    <button className="text-gray-400 hover:text-gray-600 text-sm">×</button>
                                </div>
                                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                                    <div className="flex -space-x-1">
                                        <div className="w-5 h-5 rounded-full bg-purple-400 border border-white"></div>
                                        <div className="w-5 h-5 rounded-full bg-pink-400 border border-white"></div>
                                    </div>
                                    <span className="text-xs text-gray-700 flex-1">Work anniversary</span>
                                    <button className="text-gray-400 hover:text-gray-600 text-sm">×</button>
                                </div>
                                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                                    <div className="flex -space-x-1">
                                        <div className="w-5 h-5 rounded-full bg-orange-400 border border-white"></div>
                                        <div className="w-5 h-5 rounded-full bg-red-400 border border-white"></div>
                                        <div className="w-5 h-5 rounded-full bg-yellow-400 border border-white"></div>
                                        <div className="w-5 h-5 rounded-full bg-teal-400 border border-white"></div>
                                        <div className="w-5 h-5 rounded-full bg-indigo-400 border border-white"></div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-xs text-gray-700">Weekly Review Meeting</div>
                                        <div className="text-xs text-gray-500">9:00 AM - 9:30 AM</div>
                                    </div>
                                    <span className="text-xs text-gray-500">+8 attending</span>
                                    <button className="text-gray-400 hover:text-gray-600 text-sm">×</button>
                                </div>
                                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                                    <div className="flex -space-x-1">
                                        <div className="w-5 h-5 rounded-full bg-teal-400 border border-white"></div>
                                        <div className="w-5 h-5 rounded-full bg-indigo-400 border border-white"></div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-xs text-gray-700">Client Meeting - #AB</div>
                                        <div className="text-xs text-gray-500">6:45 PM - 9:30 PM</div>
                                    </div>
                                    <button className="text-gray-400 hover:text-gray-600 text-sm">×</button>
                                </div>
                            </div>
                        </div>

                        {/* Upcoming Events */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                    </svg>
                                    Upcoming Events
                                </h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">Team Building Workshop</p>
                                        <p className="text-xs text-gray-500">10:00 AM - 1:00 PM</p>
                                    </div>
                                    <span className="text-sm font-bold text-gray-900">13 Oct</span>
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">Employee of the Month Award</p>
                                        <p className="text-xs text-gray-500">4:00 PM - 4:30 PM</p>
                                    </div>
                                    <span className="text-sm font-bold text-gray-900">20 Oct</span>
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">Diversity and Inclusion Seminar</p>
                                        <p className="text-xs text-gray-500">9:30 AM - 12:30 PM</p>
                                    </div>
                                    <span className="text-sm font-bold text-gray-900">5 Nov</span>
                                </div>
                                <button className="text-[#266ECD] text-sm font-semibold hover:underline">More...</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedPage1;