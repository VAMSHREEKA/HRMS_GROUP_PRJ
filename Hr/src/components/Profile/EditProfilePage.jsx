import React from 'react';
import { Pencil } from 'lucide-react';

const EditProfilePage = ({ onCancel, onSave }) => {
    return (
        <div className="p-4 sm:p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 border-b-2 border-gray-900 inline-block mb-12 pb-1">
                Edit Profile
            </h1>

            <div className="flex flex-col items-center mb-12">
                <div className="relative">
                    <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-200">
                        <img
                            src="https://i.pravatar.cc/150?img=5"
                            alt="Maria Aryan"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <button className="absolute bottom-1 right-1 bg-[#266ECD] text-white p-2 rounded-full hover:bg-opacity-90 transition">
                        <Pencil className="w-4 h-4" />
                    </button>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mt-4">Maria Aryan</h2>
            </div>

            <div className="space-y-6 max-w-2xl mx-auto">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Enter Details -</h3>

                <div className="space-y-4">
                    <div>
                        <label className="block text-xs text-gray-500 mb-1">First Name</label>
                        <input
                            type="text"
                            defaultValue="Maria"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#266ECD] focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label className="block text-xs text-gray-500 mb-1">Last Name</label>
                        <input
                            type="text"
                            defaultValue="Aryan"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#266ECD] focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label className="block text-xs text-gray-500 mb-1">Username</label>
                        <input
                            type="text"
                            defaultValue="@Maria1222"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#266ECD] focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label className="block text-xs text-gray-500 mb-1">Email</label>
                        <input
                            type="email"
                            defaultValue="hrmariaaryan@example.com"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#266ECD] focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label className="block text-xs text-gray-500 mb-1">Phone Number</label>
                        <div className="flex">
                            <span className="inline-flex items-center px-4 py-2.5 rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                                +91
                            </span>
                            <input
                                type="tel"
                                defaultValue="998 952 8718"
                                className="flex-1 border border-gray-300 rounded-r-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#266ECD] focus:border-transparent"
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-500 appearance-none focus:outline-none focus:ring-2 focus:ring-[#266ECD] focus:border-transparent bg-white">
                            <option>Birth</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>

                    <div className="relative">
                        <select className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-500 appearance-none focus:outline-none focus:ring-2 focus:ring-[#266ECD] focus:border-transparent bg-white">
                            <option>Gender</option>
                            <option>Female</option>
                            <option>Male</option>
                            <option>Other</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center gap-4 mt-12 pt-6">
                    <button
                        onClick={onCancel}
                        className="px-8 py-2.5 rounded-full bg-gray-400 text-white font-bold hover:bg-gray-500 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onSave}
                        className="px-8 py-2.5 rounded-full bg-[#0066FF] text-white font-bold hover:bg-blue-600 transition"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditProfilePage;