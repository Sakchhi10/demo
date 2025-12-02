import { useState } from "react";
import {
  FaTachometerAlt,
  FaShoppingCart,
  FaBookOpen,
  FaUser,
  FaFolder,
  FaUsers,
  FaBriefcase,
  FaBlog,
  FaComments
} from "react-icons/fa";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";

export default function Sidebar() {
  const [open, setOpen] = useState({
    dashboards: true,
    pages: true,
  });

  const [active, setActive] = useState("Default");

  const toggleMenu = (menu) => {
    setOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const handleActive = (item) => {
    setActive(item);
  };

  return (
    <aside className="sidebar">
      {/* Profile */}
      <div className="profile">
        <div className="avatar">B</div>
        <span className="brand">ByeWind</span>
      </div>

      {/* Favorites */}
      <div className="section">
        <p className="section-title">Favorites</p>
        <ul>
          <li
            className={active === "Overview" ? "active" : ""}
            onClick={() => handleActive("Overview")}
          >
            <span className="dot">•</span> Overview
          </li>
          <li
            className={active === "Projects" ? "active" : ""}
            onClick={() => handleActive("Projects")}
          >
            <span className="dot">•</span> Projects
          </li>
        </ul>
      </div>

      {/* Dashboards */}
      <div className="section">
        <p className="section-title" onClick={() => toggleMenu("dashboards")}>
          Dashboards {open.dashboards ? <FiChevronDown /> : <FiChevronRight />}
        </p>
        {open.dashboards && (
          <ul>
            <li
              className={active === "Default" ? "active" : ""}
              onClick={() => handleActive("Default")}
            >
              <FaTachometerAlt className="icon" /> Default
            </li>
            <li
              className={active === "eCommerce" ? "active" : ""}
              onClick={() => handleActive("eCommerce")}
            >
              <FaShoppingCart className="icon" /> eCommerce
            </li>
            <li
              className={active === "Projects2" ? "active" : ""}
              onClick={() => handleActive("Projects2")}
            >
              <FaFolder className="icon" /> Projects
            </li>
            <li
              className={active === "Online Courses" ? "active" : ""}
              onClick={() => handleActive("Online Courses")}
            >
              <FaBookOpen className="icon" /> Online Courses
            </li>
          </ul>
        )}
      </div>

      {/* Pages */}
      <div className="section">
        <p className="section-title" onClick={() => toggleMenu("pages")}>
          Pages {open.pages ? <FiChevronDown /> : <FiChevronRight />}
        </p>
        {open.pages && (
          <ul>
            <li><FaUser className="icon" /> User Profile</li>
            <ul className="sub-menu">
              <li>Overview</li>
              <li>Projects</li>
              <li>Campaigns</li>
              <li>Documents</li>
              <li>Followers</li>
            </ul>
            <li><FaUsers className="icon" /> Account</li>
            <li><FaBriefcase className="icon" /> Corporate</li>
            <li><FaBlog className="icon" /> Blog</li>
            <li><FaComments className="icon" /> Social</li>
          </ul>
        )}
      </div>
    </aside>
  );
}
