import React from 'react';
import {
    Heart,
    Download,
    Globe,
    MapPin,
    FileText,
    Monitor,
    Trash2,
    Settings,
    UserPlus,
    User,
    Edit2,
    LogOut,
    Copy,
    ChevronRight,
    Briefcase
} from 'lucide-react';

const ProfilePage = ({ onEditProfile }) => {
    // read user from localStorage with updates
    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        const loadUser = () => {
            try {
                const u = JSON.parse(localStorage.getItem("user") || "null");
                setUser(u);
            } catch (e) {
                setUser(null);
            }
        };
        loadUser();
        window.addEventListener("user-updated", loadUser);
        return () => window.removeEventListener("user-updated", loadUser);
    }, []);

    if (!user) {
        return <div className="p-10 text-center">Please log in to view profile.</div>;
    }

    return (
        <div className="p-6 sm:p-10 max-w-[1600px] mx-auto space-y-8">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Left Section - Main Content */}
                <div className="flex-1">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Profile Settings</h1>
                        <p className="text-gray-500 mt-1">Manage your personal information and preferences.</p>
                    </div>

                    {/* Profile Header Card */}
                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 sm:p-8 flex flex-col sm:flex-row gap-8 items-start mb-8">
                        <div className={`w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md shrink-0 flex items-center justify-center ${user.profile_picture ? 'bg-gray-100' : 'bg-blue-50 text-blue-500'}`}>
                            {user.profile_picture ? (
                                <img src={user.profile_picture} alt={user.fullname} className="w-full h-full object-cover" />
                            ) : (
                                <User size={64} />
                            )}
                        </div>

                        <div className="flex-1 w-full">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">{user.fullname}</h2>
                                    <div className="flex items-center gap-2 mt-1">
                                        <Briefcase size={14} className="text-gray-400" />
                                        <span className="text-sm font-medium text-gray-600">{user.designation || "Employee"}</span>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <button
                                        onClick={onEditProfile}
                                        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition shadow-sm"
                                    >
                                        <Edit2 size={16} />
                                        Edit Profile
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 py-3 px-4 bg-gray-50 rounded-lg border border-gray-100 w-fit">
                                <div className="p-1.5 bg-white rounded-md shadow-sm">
                                    <MailIcon />
                                </div>
                                <span className="text-sm text-gray-700 font-medium">{user.email}</span>
                                <button
                                    className="text-gray-400 hover:text-blue-600 transition ml-2"
                                    onClick={() => navigator.clipboard?.writeText(user.email)}
                                    title="Copy Email"
                                >
                                    <Copy size={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Quick Access Grid */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Activity</h3>
                            <div className="space-y-1">
                                <MenuItem icon={Heart} label="Latest feed" />
                                <MenuItem icon={Download} label="Latest uploads" />
                            </div>
                        </div>
                        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Preferences</h3>
                            <div className="space-y-1">
                                <MenuItem icon={Globe} label="Languages" />
                                <MenuItem icon={FileText} label="Files and documents" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="w-full lg:w-80 space-y-6">
                    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Account</h3>
                        <div className="space-y-1">
                            <MenuItem icon={UserPlus} label="My Referrals" />
                            <MenuItem icon={Settings} label="Settings" />
                            <MenuItem icon={Monitor} label="Display" />
                            <MenuItem icon={Trash2} label="Deleted Items" />
                        </div>

                        <div className="pt-6 mt-6 border-t border-gray-100">
                            <button
                                className="w-full bg-red-50 text-red-600 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-red-100 transition"
                                onClick={async () => {
                                    const { logout } = await import("../../services/auth.service.js");
                                    await logout();
                                    localStorage.removeItem("token");
                                    localStorage.removeItem("user");
                                    window.location.href = "/login";
                                }}
                            >
                                <LogOut size={18} />
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Helper Components
const MenuItem = ({ icon: Icon, label }) => (
    <button className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-50 text-left group transition-colors">
        <div className="flex items-center gap-3">
            <Icon className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
            <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">{label}</span>
        </div>
        <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-gray-500" />
    </button>
);

const MailIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
)

export default ProfilePage;