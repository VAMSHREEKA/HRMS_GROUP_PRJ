import React, { useState } from "react";
import ProfileContent from "../components/ProfileContent";

function Profile1() {
  const [activeMenu, setActiveMenu] = useState("Profile");

  return (
    <div className="min-h-screen bg-white">
      <div className="flex">    
        {/* Main Content */}
        <div className="flex-1 min-h-screen bg-gray-50">
          <ProfileContent />
        </div>
      </div>
    </div>
  );
}

export default Profile1;