
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function BarChart({ data }) {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Projections vs Actuals",
        data: data,
        backgroundColor: "#4cafef",
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
      <h4>Projections vs Actuals</h4>
      <Bar data={chartData} options={options} />
    </div>
  );
}
