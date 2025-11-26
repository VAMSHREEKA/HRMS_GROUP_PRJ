import React from "react";
import Sidebar from "./Sidebar";

function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#EBEFF1]"> 
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">

        {/* HEADER */}
        <div className="flex items-center justify-between p-6 bg-[#F6F8FA] border-b">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">Appreciate Peers</h1>
            <p className="text-sm text-gray-500">
              Recognize, appreciate, reward – celebrate your exceptional peers
            </p>
          </div>

          <div className="flex items-center gap-2">
            <img
              src="https://i.pravatar.cc/40?img=12"
              alt="avatar"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex flex-col items-start">
              <span className="text-sm font-semibold text-gray-700 cursor-pointer">
                HR Username ▼
              </span>
              <span className="text-xs text-gray-500">
                hr.username@example.com
              </span>
            </div>
          </div>
        </div>

        {/* PAGE CONTENT */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
