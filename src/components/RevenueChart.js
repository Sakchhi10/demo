

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export default function RevenueChart({ data }) {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Current Week",
        data: data.current,
        borderColor: "#4cafef",
        fill: false,
        tension: 0.4,
      },
      {
        label: "Previous Week",
        data: data.previous,
        borderColor: "#8884d8",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { labels: { color: "#fff" } },
    },
    scales: {
      x: { ticks: { color: "#ccc" }, grid: { color: "#333" } },
      y: { ticks: { color: "#ccc" }, grid: { color: "#333" } },
    },
  };

  return (
    <div className="chart-box">
      <h4>Revenue</h4>
      <Line data={chartData} options={options} />
    </div>
  );
}
