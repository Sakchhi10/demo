import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function SalesDonut({ sales }) {
  const chartData = {
    labels: sales.map(s => s.type),
    datasets: [
      {
        label: "Total Sales",
        data: sales.map(s => s.value),
        backgroundColor: ["#4cafef", "#82ca9d", "#8884d8", "#ffc658"],
        borderColor: "#121212",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: { color: "#fff" },
      },
    },
  };

  return (
    <div className="chart-box">
      <h4>Total Sales</h4>
      <Doughnut data={chartData} options={options} />
    </div>
  );
}
