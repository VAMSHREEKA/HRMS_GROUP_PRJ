import React from "react";
import { Mail, Phone, MoreVertical } from "lucide-react";

const Ecard = () => {
  const images = [
    {
      imge: "/pexels-olly-927022.jpg",
      states: "ACTIVE",
      name: "Olivia Williams",
      role: "PHP Web Developer",
      email: "o.williams@example.com",
      department: "Development",
      date: "Nov 24, 2025"
    },
    {
      imge: "/pexels-olly-927022.jpg",
      states: "ACTIVE",
      name: "Liam Johnson",
      role: "React Developer",
      email: "l.johnson@example.com",
      department: "Development",
      date: "Nov 24, 2025"
    },
    {
      imge: "/pexels-olly-927022.jpg",
      states: "ON-LEAVE",
      name: "Emma Brown",
      role: "UI/UX Designer",
      email: "e.brown@example.com",
      department: "Design",
      date: "Nov 24, 2025"
    },
    {
      imge: "/pexels-olly-927022.jpg",
      states: "DEACTIVE",
      name: "Noah Smith",
      role: "Backend Developer",
      email: "n.smith@example.com",
      department: "Backend",
      date: "Nov 24, 2025"
    },
    {
      imge: "/pexels-olly-927022.jpg",
      states: "ACTIVE",
      name: "Ava Davis",
      role: "Full Stack Developer",
      email: "a.davis@example.com",
      department: "Development",
      date: "Nov 24, 2025"
    },
    {
      imge: "/pexels-olly-927022.jpg",
      states: "ACTIVE",
      name: "William Miller",
      role: "DevOps Engineer",
      email: "w.miller@example.com",
      department: "DevOps",
      date: "Nov 24, 2025"
    },
  ];

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
      {images.map((img, index) => (
        <div key={index} className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-5 flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide ${img.states === "ACTIVE" ? "bg-green-50 text-green-700"
                : img.states === "DEACTIVE" ? "bg-red-50 text-red-700"
                  : "bg-blue-50 text-blue-700"
              }`}>
              {img.states}
            </span>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical size={16} />
            </button>
          </div>

          {/* Profile */}
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border border-gray-100">
              <img src={img.imge} alt={img.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg">{img.name}</h3>
            <p className="text-sm text-gray-500 font-medium">{img.role}</p>
          </div>

          {/* Details */}
          <div className="grid grid-cols-2 gap-4 mb-6 border-t border-b border-gray-50 py-4">
            <div className="text-center border-r border-gray-50">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">Department</p>
              <p className="text-sm font-semibold text-gray-800">{img.department || "Development"}</p>
            </div>
            <div className="text-center">
              <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider mb-1">Joined</p>
              <p className="text-sm font-semibold text-gray-800">{img.date || "N/A"}</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 mb-6 flex-1">
            <a href={`mailto:${img.email}`} className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-50">
              <Mail size={16} className="text-gray-400" />
              <span className="truncate">{img.email}</span>
            </a>
            <a href="#" className="flex items-center gap-3 text-sm text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-gray-50">
              <Phone size={16} className="text-gray-400" />
              <span className="truncate">(123) 456-7890</span>
            </a>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-3 mt-auto">
            <button className="w-full py-2 px-4 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
              View Profile
            </button>
            <button className="w-full py-2 px-4 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-all shadow-sm">
              Message
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Ecard;