import React from "react";
import "./SideBarItem.css";

export default function SideBarItem({ icon, text, onClick }) {
  const handleClick = () => {
    if (typeof onClick === 'function') {
      onClick();
    }
  };

  return (
    <div className="item" onClick={handleClick}>
      {icon}
      {text}
    </div>
  );
}