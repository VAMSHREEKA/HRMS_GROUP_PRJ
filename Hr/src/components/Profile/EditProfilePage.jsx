import React, { useState } from 'react';
import { User, X } from 'lucide-react';
import axios from 'axios';

const EditProfilePage = ({ onCancel, onSave: onSaveCallback }) => {
    // Get user from local storage
    const user = JSON.parse(localStorage.getItem('user'));

    // Initial state
    const [formData, setFormData] = useState({
        fullname: user.fullname || '',
        email: user.email || '',
        designation: user.designation || '',
        profile_picture: user.profile_picture || ''
    });

    const fileInputRef = React.useRef(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData({ ...formData, profile_picture: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemovePhoto = () => {
        setFormData({ ...formData, profile_picture: null });
    };

    const handleSave = async () => {
        try {
            const res = await axios.put(`http://localhost:3000/api/users/profile/${user.id}`, formData);
            if (res.data) {
                // Update local storage
                localStorage.setItem('user', JSON.stringify(res.data));
                // Dispatch event for sidebar synchronization
                window.dispatchEvent(new Event("user-updated"));
                onSaveCallback();
            }
        } catch (err) {
            console.error("Failed to update profile", err);
            alert("Failed to update profile");
        }
    };

    const avatarSrc = formData.profile_picture;

    return (
        <div className="p-4 sm:p-8 max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 border-b-2 border-gray-900 inline-block mb-12 pb-1">
                Edit Profile
            </h1>

            <div className="flex flex-col items-center mb-12">
                <div className="relative group">
                    <div
                        className={`w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md flex items-center justify-center shrink-0 ${!avatarSrc ? 'bg-blue-50 text-blue-500' : 'bg-gray-100'}`}
                    >
                        {avatarSrc ? (
                            <img src={avatarSrc} alt="Profile" className="w-full h-full object-cover" />
                        ) : (
                            <User size={64} />
                        )}
                    </div>

                    {/* ACTIONS: Upload & Remove */}
                    <div className="absolute -bottom-2 -right-2 flex gap-2">
                        <button
                            type="button"
                            onClick={() => fileInputRef.current.click()}
                            className="bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition"
                            title="Upload Photo"
                        >
                            <User size={16} /> {/* Using User icon as pencil alternative or generic action, strictly relying on lucide-react imports from ProfilePage context if possible but here we might need Pencil back */}
                        </button>
                        {avatarSrc && (
                            <button
                                type="button"
                                onClick={handleRemovePhoto}
                                className="bg-red-500 text-white p-2 rounded-full shadow-lg hover:bg-red-600 transition"
                                title="Remove Photo"
                            >
                                <X size={16} />
                            </button>
                        )}
                    </div>
                </div>

                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                    className="hidden"
                />

                <h2 className="text-xl font-bold text-gray-900 mt-4">{user.fullname}</h2>
                <p className="text-sm text-gray-500 mt-1">
                    {avatarSrc ? "Click buttons to change" : "Upload a profile picture"}
                </p>
            </div>

            <div className="space-y-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Details</h3>

                <div className="space-y-4">
                    <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">Full Name</label>
                        <input
                            type="text"
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#266ECD]"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#266ECD]"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">Designation</label>
                        <input
                            type="text"
                            name="designation"
                            value={formData.designation}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#266ECD]"
                        />
                    </div>
                </div>

                <div className="flex justify-center gap-4 mt-12 pt-6">
                    <button
                        onClick={onCancel}
                        className="px-8 py-2.5 rounded-full bg-gray-100 text-gray-700 font-bold hover:bg-gray-200 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSave}
                        className="px-8 py-2.5 rounded-full bg-[#0066FF] text-white font-bold hover:bg-blue-600 transition shadow-lg"
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditProfilePage;