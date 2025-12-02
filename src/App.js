import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import StatCard from "./components/Statcard";
import RevenueChart from "./components/RevenueChart";
import BarChart from "./components/BarChart";
import TopProducts from "./components/TopProduct";
import LocationRevenue from "./components/LocationRevenue";
import SalesDonut from "./components/SalesDonut";
import Notifications from "./components/Notifications";
import Activities from "./components/Activities";
import { DashboardProvider, useDashboard } from "./context/DashboardContext";
import "./styles.css";

console.log({
  Sidebar,
  Header,
  StatCard,
  RevenueChart,
  BarChart,
  TopProducts,
  LocationRevenue,
  SalesDonut,
  Notifications,
  Activities,
});

function Dashboard() {
  const { data } = useDashboard();

  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <Header />
        <div className="stats">
          <StatCard title="Customers" value={data.customers} />
          <StatCard title="Orders" value={data.orders} />
          <StatCard title="Revenue" value={`$${data.revenue}`} />
          <StatCard title="Growth" value={`${data.growth}%`} />
        </div>

        <div className="charts">
          <BarChart data={data.projections} />
          <RevenueChart data={data.revenueTrend} />
        </div>

        <div className="grid">
          <TopProducts products={data.topProducts} />
          <LocationRevenue locations={data.locations} />
          <SalesDonut sales={data.sales} />
        </div>
      </div>

      <div className="right-panel">
        <Notifications notifications={data.notifications} />
        <Activities activities={data.activities} />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <DashboardProvider>
      <Dashboard />
    </DashboardProvider>
  );
}



// import React, { useState, useEffect } from "react";
// import axios from "axios";

// export default function App() {
//   const [data, setData] = useState([]);   // store products array
//   const [error, setError] = useState(null); // store error
//   const [loading, setLoading] = useState(true); // store loading state

//   useEffect(() => {
//     // Define async function inside useEffect
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://fakestoreapi.com/products");
//         setData(response.data); // save API response to state
//       } catch (err) {
//         setError(err); // save error if any
//       } finally {
//         setLoading(false); // stop loading in both success & error
//       }
//     };

//     fetchData();
//   }, []); // empty dependency → runs once when component mounts

//   // Handle loading state
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   // Handle error state
//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   // Render data when available
//   return (
//     <div>
//       <h1>Fetched Products</h1>
//       <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
//         {data.map((product) => (
//           <div
//             key={product.id}
//             style={{
//               border: "1px solid #ddd",
//               borderRadius: "8px",
//               padding: "10px",
//               textAlign: "center",
//               background: "#f9f9f9",
//             }}
//           >
//             <img
//               src={product.image}
//               alt={product.title}
//               style={{ width: "100px", height: "100px", objectFit: "contain" }}
//             />
//             <h2 style={{ fontSize: "16px" }}>{product.title}</h2>
//             <p style={{ fontWeight: "bold" }}>₹{product.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


