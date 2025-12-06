import React from "react";
import { Clock, Plus } from "lucide-react";
import { motion } from "framer-motion";

const meetings = [
  {
    id: 1,
    dayShort: "FRI",
    date: 12,
    title: "interview",
    time: "From 10:30 PM to 12:41 PM",
    color: "bg-blue-500",
  },
  {
    id: 2,
    dayShort: "FRI",
    date: 12,
    title: "interview",
    time: "From 10:30 PM to 12:41 PM",
    color: "bg-blue-500",
  },
];

export default function MeetingsUI() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md w-full h-full flex flex-col min-h-[300px]">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-blue-600">Meetings</h2>
        <button className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors cursor-pointer">
          <Plus size={16} />
          Add Meeting
        </button>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto">
        {meetings.map((m, idx) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * idx }}
            className="flex items-center gap-4"
          >
            <div className={`w-12 h-12 rounded-lg flex flex-col items-center justify-center text-white ${m.color} shrink-0`}>
              <span className="text-[10px] font-bold uppercase">{m.dayShort}</span>
              <span className="text-lg font-bold leading-none">{m.date}</span>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-gray-900 font-bold text-sm truncate capitalize">{m.title}</h3>
              <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                <span className="truncate">{m.time}</span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="text-xs text-gray-400">Last synced just now</div>
        <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-xs font-medium hover:bg-blue-700 transition-colors cursor-pointer">
          Sync
        </button>
      </div>
    </div>
  );
}