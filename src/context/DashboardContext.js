import { createContext, useContext, useState } from "react";

const DashboardContext = createContext();

export const useDashboard = () => useContext(DashboardContext);

export const DashboardProvider = ({ children }) => {
  const [data] = useState({
    customers: 3781,
    orders: 1219,
    revenue: 695,
    growth: 30.1,
    projections: [120, 180, 150, 200, 170, 220],
    revenueTrend: {
      current: [500, 800, 700, 900, 1000, 1200],
      previous: [400, 600, 500, 700, 800, 900],
    },
    locations: [
      { city: "New York", value: "72k" },
      { city: "San Francisco", value: "39k" },
      { city: "Sydney", value: "25k" },
      { city: "Singapore", value: "22k" },
    ],
    topProducts: [
      { name: "ASOS Ridley High Waist", price: "$79.49", qty: 82, amount: "$6,518.18" },
      { name: "Marco Lightweight Shirt", price: "$128.50", qty: 37, amount: "$4,754.50" },
      { name: "Half Sleeve Shirt", price: "$39.99", qty: 64, amount: "$2,559.36" },
      { name: "Lightweight Jacket", price: "$20.00", qty: 184, amount: "$3,680.00" },
      { name: "Macro Shoes", price: "$39.99", qty: 64, amount: "$2,559.36" },
    ],
    sales: [
      { type: "Direct", value: 55 },
      { type: "Affiliate", value: 15 },
      { type: "Sponsored", value: 20 },
      { type: "Email", value: 10 },
    ],
    notifications: [
      "You have a bug that needs attention",
      "New user registered",
      "You have a bug that needs attention",
      "You have 4 new tasks",
      "New subscription added",
    ],
    activities: [
      "Released a new version",
      "Fixed a bug in Page X",
      "Added a new feature",
      "Deleted a page in Project X",
    ],
  });

  return (
    <DashboardContext.Provider value={{ data }}>
      {children}
    </DashboardContext.Provider>
  );
};
