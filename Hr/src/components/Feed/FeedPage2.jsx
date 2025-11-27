const FeedPage2 = ({ onNavigateToPage2, onNavigateToPage3 }) => {
    return (
        <div className="p-4 sm:p-8">

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-xl font-bold text-[#266ECD]">Feed</h1>
                        <p className="text-sm text-gray-500 mt-1">Stay Connected and Informed: Your Hub for Updates and Interaction</p>
                    </div>
                    <button className="text-red-500 hover:text-red-600">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Tabs */}
                        <div className="flex gap-8 border-b-2 border-gray-200">
                            <button
                                onClick={onNavigateToPage3}
                                className="pb-3 text-gray-900 font-semibold border-b-4 border-[#266ECD] -mb-0.5"
                            >
                                Employee of the Month
                            </button>
                            <button className="pb-3 text-gray-500 hover:text-gray-900 font-medium">
                                Promotions
                            </button>
                        </div>

                        {/* Appreciation Card 1 - Priyansh to Rakesh */}
                        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-400 to-indigo-500">
                                            <img src="https://i.pravatar.cc/150?img=11" alt="PJ" className="w-full h-full rounded-full object-cover" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">Priyansh Jadhav</p>
                                            <p className="text-sm text-gray-500">HR Manager</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1">
                                            APPRECIATED 🎉
                                        </span>
                                        <div className="w-12 h-12 rounded-full bg-linear-to-br from-orange-400 to-red-500">
                                            <img src="https://i.pravatar.cc/150?img=13" alt="RS" className="w-full h-full rounded-full object-cover" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 mb-5">
                                    <span className="text-sm text-gray-600">to</span>
                                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-orange-400 to-red-500">
                                        <img src="https://i.pravatar.cc/150?img=13" alt="RS" className="w-full h-full rounded-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">Rakesh Sharma</p>
                                        <p className="text-sm text-gray-500">Senior Developer</p>
                                    </div>
                                    <div className="ml-auto flex items-center gap-3 text-sm text-gray-500">
                                        <span>03/16/2025</span>
                                        <span>9:15 AM</span>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-5 shadow-md">
                                    <div className="flex items-start gap-3 mb-3">
                                        <span className="text-3xl">🎊</span>
                                        <h3 className="text-xl font-bold text-teal-900">Congratulations to Rakesh Sharma</h3>
                                    </div>
                                    <div className="mb-4">
                                        <span className="bg-teal-200 text-teal-900 px-4 py-1.5 rounded-full text-sm font-bold">
                                            Outstanding Performance
                                        </span>
                                    </div>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        Rakesh's, your dedication and hard work have been instrumental in the successful launch of
                                        Version 2.0 of our app. Your outstanding performance in all that it is significantly
                                        appreciated. Keep up the great work!
                                    </p>
                                </div>

                                <div className="flex items-center gap-6">
                                    <button className="flex items-center gap-2 text-purple-700 hover:text-purple-800">
                                        <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                                            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                        </svg>
                                        <span className="font-bold text-base">2,450</span>
                                    </button>
                                    <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                        <span className="font-medium">0</span>
                                    </button>
                                    <button className="ml-auto flex items-center gap-2 text-gray-600 hover:text-gray-800">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                        </svg>
                                        <span className="text-sm font-medium">Send Love</span>
                                    </button>
                                    <button className="text-gray-500 hover:text-gray-700">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </button>
                                    <button className="text-gray-500 hover:text-gray-700">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Appreciation Card 2 - Alex to Bob */}
                        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                            <div className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-linear-to-br from-teal-400 to-cyan-500">
                                            <img src="https://i.pravatar.cc/150?img=14" alt="AJ" className="w-full h-full rounded-full object-cover" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">Alex Johnson</p>
                                            <p className="text-sm text-gray-500">Project Manager</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="bg-purple-100 text-purple-700 px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1">
                                            APPRECIATED 🎉
                                        </span>
                                        <div className="w-12 h-12 rounded-full bg-linear-to-br from-pink-400 to-rose-500">
                                            <img src="https://i.pravatar.cc/150?img=15" alt="BS" className="w-full h-full rounded-full object-cover" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 mb-5">
                                    <span className="text-sm text-gray-600">to</span>
                                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-pink-400 to-rose-500">
                                        <img src="https://i.pravatar.cc/150?img=15" alt="BS" className="w-full h-full rounded-full object-cover" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900">Bob Smith</p>
                                        <p className="text-sm text-gray-500">Senior Developer</p>
                                    </div>
                                    <div className="ml-auto flex items-center gap-3 text-sm text-gray-500">
                                        <span>07/18/2025</span>
                                        <span>10:45 PM</span>
                                    </div>
                                </div>

                                <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-5 shadow-md">
                                    <div className="flex items-start gap-3 mb-3">
                                        <span className="text-3xl">🙌</span>
                                        <h3 className="text-xl font-bold text-teal-900">Stellar Teamwork</h3>
                                    </div>
                                    <div className="mb-4">
                                        <span className="bg-teal-200 text-teal-900 px-4 py-1.5 rounded-full text-sm font-bold">
                                            Team Collaboration
                                        </span>
                                    </div>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        Kudos to Bob for outstanding teamwork on the recent project!
                                    </p>
                                </div>

                                <div className="flex items-center gap-6">
                                    <button className="flex items-center gap-2 text-purple-700 hover:text-purple-800">
                                        <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                                            <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                                        </svg>
                                        <span className="font-bold text-base">2,450</span>
                                    </button>
                                    <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                        <span className="font-medium">0</span>
                                    </button>
                                    <button className="ml-auto flex items-center gap-2 text-gray-600 hover:text-gray-800">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                        </svg>
                                        <span className="text-sm font-medium">Send Love</span>
                                    </button>
                                    <button className="text-gray-500 hover:text-gray-700">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </button>
                                    <button className="text-gray-500 hover:text-gray-700">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="space-y-6">
                        {/* New Point Alert */}
                        <div className="bg-white rounded-2xl shadow-md p-6">
                            <h3 className="text-lg font-bold text-[#266ECD] mb-4">New Point Alert!</h3>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="text-5xl font-bold text-[#266ECD]">250</div>
                                <div className="w-10 h-10 rounded-full bg-[#266ECD] flex items-center justify-center">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">Reward points with Manager</p>
                            <button
                                onClick={onNavigateToPage2}
                                className="w-full bg-[#266ECD] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg"
                            >
                                Attempt
                            </button>
                        </div>

                        {/* Don't Miss Out! Training Session */}
                        <div className="bg-white rounded-2xl shadow-md p-6">
                            <h3 className="text-lg font-bold text-[#266ECD] mb-4">Don't Miss Out! Upcoming Training Session</h3>
                            <div className="space-y-2 mb-5">
                                <p className="text-sm text-gray-700">
                                    <span className="font-bold">Date:</span> 29 Oct
                                </p>
                                <p className="text-sm text-gray-700">
                                    <span className="font-bold">Time:</span> 9:00 AM - 12:00 PM
                                </p>
                            </div>
                            <button className="w-full bg-[#266ECD] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg">
                                Register
                            </button>
                        </div>

                        {/* Upcoming Events */}
                        <div className="bg-white rounded-2xl shadow-md p-6">
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
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">Town Hall Meeting</p>
                                        <p className="text-xs text-gray-500">2:00 PM - 3:30 PM</p>
                                    </div>
                                    <span className="text-sm font-bold text-gray-900">10 Nov</span>
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

export default FeedPage2;