const FeedPage3 = ({ onNavigateBack }) => {
    return (
        <div className="p-4 sm:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                    <button
                        onClick={onNavigateBack}
                        className="text-gray-600 hover:text-gray-800"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <div>
                        <h1 className="text-xl font-bold text-[#266ECD]">Feed</h1>
                        <p className="text-sm text-gray-500 mt-1">Stay Connected and Informed</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Employee of the Month Card */}
                        <div className="bg-white rounded-3xl shadow-md p-8">
                            {/* Header */}
                            <div className="text-center mb-8">
                                <h2 className="text-sm font-bold text-gray-700 tracking-widest uppercase">
                                    Employee of the Month
                                </h2>
                            </div>

                            {/* Featured Employee */}
                            <div className="text-center mb-8">
                                <div className="inline-block mb-6">
                                    <div className="w-40 h-40 rounded-3xl overflow-hidden bg-white border border-gray-200 p-1">
                                        <div className="w-full h-full rounded-3xl overflow-hidden">
                                            <img
                                                src="https://i.pravatar.cc/200?img=33"
                                                alt="Priyansh Laxmi"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">Priyansh Laxmi</h3>
                            </div>

                            {/* Description */}
                            <div className="max-w-2xl mx-auto mb-8">
                                <p className="text-gray-700 text-center leading-relaxed">
                                    Your leadership sets the tone for excellence. The way you navigate challenges, support your team, and turn goals into achievements has truly elevated our entire workflow. Your ability to keep everyone aligned and motivated is nothing short of inspiring.
                                </p>
                            </div>
                        </div>

                        {/* Team Section */}
                        <div className="bg-white rounded-3xl shadow-md p-8">
                            <h3 className="text-lg font-bold text-gray-800 mb-6">Team</h3>

                            <div className="grid grid-cols-3 gap-6">
                                {/* Team Member 1 */}
                                <div className="text-center">
                                    <div className="mb-4">
                                        <div className="w-28 h-28 mx-auto rounded-3xl overflow-hidden bg-white border border-gray-200 p-1">
                                            <div className="w-full h-full rounded-3xl overflow-hidden">
                                                <img
                                                    src="https://i.pravatar.cc/150?img=12"
                                                    alt="Maxim Martian"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="font-bold text-gray-900 text-sm mb-1">Maxim Martian</h4>
                                    <p className="text-gray-500 text-xs">Project Manager</p>
                                </div>

                                {/* Team Member 2 */}
                                <div className="text-center">
                                    <div className="mb-4">
                                        <div className="w-28 h-28 mx-auto rounded-3xl overflow-hidden bg-white border border-gray-200 p-1">
                                            <div className="w-full h-full rounded-3xl overflow-hidden">
                                                <img
                                                    src="https://i.pravatar.cc/150?img=45"
                                                    alt="Marshell Laxmi"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="font-bold text-gray-900 text-sm mb-1">Marshell Laxmi</h4>
                                    <p className="text-gray-500 text-xs">UI/UX Designer</p>
                                </div>

                                {/* Team Member 3 */}
                                <div className="text-center">
                                    <div className="mb-4">
                                        <div className="w-28 h-28 mx-auto rounded-3xl overflow-hidden bg-white border border-gray-200 p-1">
                                            <div className="w-full h-full rounded-3xl overflow-hidden">
                                                <img
                                                    src="https://i.pravatar.cc/150?img=68"
                                                    alt="Mathew Marshall"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <h4 className="font-bold text-gray-900 text-sm mb-1">Mathew Marshall</h4>
                                    <p className="text-gray-500 text-xs">Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar - Same as FeedPage2 */}
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
                            <button className="w-full bg-[#266ECD] text-white px-6 py-2.5 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg">
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

export default FeedPage3;