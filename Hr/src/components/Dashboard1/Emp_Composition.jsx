
import React, { useMemo, useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip } from "chart.js";
import { FaMars, FaVenus } from "react-icons/fa";

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

export default function EmpComp({ male = 65, female = 35 }) {
  const chartRef = useRef(null);

  const data = useMemo(
    () => ({
      labels: ["Male", "Female"],
      datasets: [
        {
          data: [male, female],
          backgroundColor: ["#27d9b1", "#3b2bea"],
          borderColor: "#e8f5fb",
          borderWidth: 2,
          hoverOffset: 6,
        },
      ],
    }),
    [male, female]
  );

  const options = useMemo(
    () => ({
      cutout: "70%",
      rotation: -Math.PI * 0.25,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: true },
      },
      maintainAspectRatio: false,
    }),
    []
  );

  return (
    <div className="bg-white rounded-xl p-3.5 shadow-[0_8px_20px_rgba(2,6,23,0.06)] border border-[rgba(19,38,63,0.04)] w-full max-w-[340px] font-[Inter,system-ui,Arial,sans-serif] max-[420px]:w-[92%]">
      <div className="text-[#155dfc] font-bold m-0 mb-3 ml-1.5 text-lg">Employees Composition</div>

      <div className="relative h-60 flex items-center justify-center max-[420px]:h-[200px]">
        <div className="absolute inset-3 flex items-center justify-center [&>canvas]:w-full! [&>canvas]:h-full!">
          <Doughnut ref={chartRef} data={data} options={options} />
        </div>

        <div className="absolute inline-flex items-center gap-2 px-3 py-2 font-bold bg-white rounded-[10px] shadow-[0_6px_14px_rgba(19,38,63,0.06)] border border-[rgba(19,38,63,0.05)] whitespace-nowrap left-3.5 top-[22px] text-[#3b2bea] max-[420px]:px-2.5 max-[420px]:py-1.5 max-[420px]:text-sm" title="Female">
          <FaVenus className="text-base" />
          <span>{female}%</span>
        </div>

        <div className="absolute inline-flex items-center gap-2 px-3 py-2 font-bold bg-white rounded-[10px] shadow-[0_6px_14px_rgba(19,38,63,0.06)] border border-[rgba(19,38,63,0.05)] whitespace-nowrap right-3 bottom-[26px] text-[#27d9b1] max-[420px]:px-2.5 max-[420px]:py-1.5 max-[420px]:text-sm" title="Male">
          <FaMars className="text-base" />
          <span>{male}%</span>
        </div>
      </div>
    </div>
  );
}