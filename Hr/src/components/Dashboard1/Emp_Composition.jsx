
import React, { useMemo, useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";

// Custom plugin to set background color to white
const backgroundColorPlugin = {
  id: 'backgroundColor',
  beforeDraw: (chart) => {
    const { ctx } = chart;
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  }
};

Chart.register(ArcElement, Tooltip, backgroundColorPlugin);

export default function EmpComp({ total = 856, malePercent = 65, femalePercent = 35 }) {
  const chartRef = useRef(null);

  const data = useMemo(
    () => ({
      labels: ["Male", "Female"],
      datasets: [
        {
          data: [malePercent, femalePercent],
          backgroundColor: ["#3b82f6", "#10b981"],
          borderColor: "#ffffff",
          borderWidth: 3,
          hoverOffset: 6,
        },
      ],
    }),
    [malePercent, femalePercent]
  );

  const options = useMemo(
    () => ({
      cutout: "75%",
      rotation: 0,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: true },
      },
      maintainAspectRatio: false,
    }),
    []
  );

  return (
    <div className="bg-white rounded-xl p-6 shadow-md w-full h-full flex flex-col min-h-[300px]">
      <h2 className="text-lg font-bold text-blue-600 mb-6">Employees Composition</h2>

      <div className="relative flex-1 flex items-center justify-center">
        <div className="w-full h-full max-w-[250px] max-h-[250px] relative">
          <Doughnut ref={chartRef} data={data} options={options} />

          {/* Center text showing total */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">{total}</div>
            </div>
          </div>
        </div>

        {/* Legend indicators */}
        <div className="absolute bottom-0 left-0 flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-100">
          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
          <span className="text-xs font-medium text-gray-700">{malePercent}%</span>
        </div>

        <div className="absolute top-0 right-0 flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-sm border border-gray-100">
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="text-xs font-medium text-gray-700">{femalePercent}%</span>
        </div>
      </div>
    </div>
  );
}