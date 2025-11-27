import React from 'react';
import {
    Heart,
    Download,
    Globe,
    MapPin,
    FileText,
    Monitor,
    Trash2,
    Clock,
    LogOut,
    Settings,
    UserPlus
} from 'lucide-react';

const ProfilePage = ({ onEditProfile }) => {
    return (
        <div className="p-4 sm:p-8 flex flex-col lg:flex-row gap-8">
            {/* Left Section */}
            <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 border-b-2 border-gray-900 inline-block mb-8 pb-1">
                    My Profile
                </h1>

                <div className="flex items-center gap-6 mb-12">
                    <div className="relative">
                        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                            <img
                                src="https://i.pravatar.cc/150?img=5"
                                alt="Maria Aryan"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute bottom-0 right-0 bg-gray-800 text-white p-1.5 rounded-full">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">Maria Aryan</h2>
                        <p className="text-sm text-gray-600 mb-3">hrmariaaryan@example.com</p>
                        <button
                            onClick={onEditProfile}
                            className="bg-[#266ECD] text-white px-6 py-1.5 rounded-md text-sm font-medium hover:bg-opacity-90 transition"
                        >
                            Edit Profile
                        </button>
                    </div>
                </div>

                <div className="space-y-8 max-w-md">
                    <div className="space-y-6">
                        <button className="flex items-center gap-6 w-full text-left group">
                            <Heart className="w-6 h-6 text-gray-900" />
                            <span className="text-lg font-medium text-gray-900 group-hover:text-[#266ECD] transition">Latest feed</span>
                        </button>
                        <button className="flex items-center gap-6 w-full text-left group">
                            <Download className="w-6 h-6 text-gray-900" />
                            <span className="text-lg font-medium text-gray-900 group-hover:text-[#266ECD] transition">Latest uploads</span>
                        </button>
                    </div>

                    <div className="border-t border-gray-300 pt-8 space-y-6">
                        <button className="flex items-center gap-6 w-full text-left group">
                            <Globe className="w-6 h-6 text-gray-900" />
                            <span className="text-lg font-medium text-gray-900 group-hover:text-[#266ECD] transition">Languages</span>
                        </button>
                        <button className="flex items-center gap-6 w-full text-left group">
                            <MapPin className="w-6 h-6 text-gray-900" />
                            <span className="text-lg font-medium text-gray-900 group-hover:text-[#266ECD] transition">Location</span>
                        </button>
                        <button className="flex items-center gap-6 w-full text-left group">
                            <FileText className="w-6 h-6 text-gray-900" />
                            <span className="text-lg font-medium text-gray-900 group-hover:text-[#266ECD] transition">Files and documents</span>
                        </button>
                        <button className="flex items-center gap-6 w-full text-left group">
                            <Monitor className="w-6 h-6 text-gray-900" />
                            <span className="text-lg font-medium text-gray-900 group-hover:text-[#266ECD] transition">Display</span>
                        </button>
                    </div>

                    <div className="border-t border-gray-300 pt-8 space-y-6">
                        <button className="flex items-center gap-6 w-full text-left group">
                            <Trash2 className="w-6 h-6 text-gray-900" />
                            <span className="text-lg font-medium text-gray-900 group-hover:text-[#266ECD] transition">Recently deleted</span>
                        </button>
                        <button className="flex items-center gap-6 w-full text-left group">
                            <Clock className="w-6 h-6 text-gray-900" />
                            <span className="text-lg font-medium text-gray-900 group-hover:text-[#266ECD] transition">Clear History</span>
                        </button>
                        <button className="flex items-center gap-6 w-full text-left group">
                            <LogOut className="w-6 h-6 text-gray-900 rotate-180" />
                            <span className="text-lg font-medium text-gray-900 group-hover:text-[#266ECD] transition">Exit</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="w-full lg:w-80">
                <div className="bg-white rounded-2xl shadow-md p-6">
                    <div className="space-y-6">
                        <button className="flex items-center gap-3 w-full text-left text-gray-500 hover:text-[#266ECD] transition">
                            <Heart className="w-5 h-5" />
                            <span className="text-sm font-medium">Appreciations</span>
                        </button>
                        <button className="flex items-center gap-3 w-full text-left text-gray-500 hover:text-[#266ECD] transition">
                            <UserPlus className="w-5 h-5" />
                            <span className="text-sm font-medium">My Referrals</span>
                        </button>
                        <button className="flex items-center gap-3 w-full text-left text-gray-500 hover:text-[#266ECD] transition">
                            <Settings className="w-5 h-5" />
                            <span className="text-sm font-medium">Settings</span>
                        </button>

                        <div className="pt-4">
                            <button className="w-full bg-red-50 text-red-500 flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-red-100 transition">
                                <LogOut className="w-5 h-5" />
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;