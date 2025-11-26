import React from 'react';

const ProfileContent = () => {
  return (
    <div className="p-6">
      {/* Main Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-8 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text">
        My Profile
      </h1>

      <div className="max-w-2xl">
        
        {/* Profile Section with Lady Photo */}
        <div className="bg-linear-to-br from-white to-blue-50 rounded-2xl border border-blue-100 p-6 mb-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-start space-x-6">
            {/* Lady Profile Photo */}
            <div className="w-24 h-24 rounded-full flex items-center justify-center overflow-hidden border-4 border-white shadow-lg">
              <img 
                src="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?semt=ais_hybrid&w=740&q=80" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Maria Aryan</h2>
              <p className="text-gray-600 mb-4 text-lg">himarlaaryan@example.com</p>
              <button className="bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* All Sections in Single Column Below Profile */}
        <div className="space-y-4">
          
          {/* Latest feed */}
          <div className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 p-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-lg shadow-lg">
                📰
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Latest feed</h3>
            </div>
          </div>

          {/* Latest uploads */}
          <div className="bg-linear-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100 p-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-linear-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-lg shadow-lg">
                📤
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Latest uploads</h3>
            </div>
          </div>

          {/* Languages */}
          <div className="bg-linear-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100 p-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-linear-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-lg shadow-lg">
                🌐
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Languages</h3>
            </div>
          </div>

          {/* Location */}
          <div className="bg-linear-to-r from-red-50 to-orange-50 rounded-xl border border-red-100 p-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-linear-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white text-lg shadow-lg">
                📍
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Location</h3>
            </div>
          </div>

          {/* Files and documents */}
          <div className="bg-linear-to-r from-yellow-50 to-amber-50 rounded-xl border border-yellow-100 p-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-linear-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center text-white text-lg shadow-lg">
                📁
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Files and documents</h3>
            </div>
          </div>

          {/* Display */}
          <div className="bg-linear-to-r from-indigo-50 to-blue-50 rounded-xl border border-indigo-100 p-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-linear-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center text-white text-lg shadow-lg">
                ⚙️
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Display</h3>
            </div>
          </div>

          {/* Recently deleted */}
          <div className="bg-linear-to-r from-gray-50 to-slate-50 rounded-xl border border-gray-100 p-4 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-linear-to-r from-gray-500 to-slate-600 rounded-full flex items-center justify-center text-white text-lg shadow-lg">
                🗑️
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Recently deleted</h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProfileContent;