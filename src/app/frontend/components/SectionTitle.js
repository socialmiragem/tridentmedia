import React from "react";

const SectionTitle = ({ title, bg, color }) => {
  return (
    <div className="py-5">
      <div className="subheading2" style={{ backgroundColor: bg }}>
        <h4 style={{ color: color }}>
          <span className="me-3">•</span>
          {title}
          <span className="ms-3">•</span>
        </h4>
      </div>
    </div>
  );
};

export default SectionTitle;