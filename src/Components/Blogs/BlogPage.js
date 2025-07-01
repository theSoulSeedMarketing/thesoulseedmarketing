import React from "react";
import { useNavigate } from "react-router-dom";

const BlogPage = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className="blog-detail-container">
      <nav style={{ display: "flex", justifyContent: "flex-end", gap: "1rem", marginBottom: "2rem" }}>
        <button className="secondary-button" onClick={() => navigate("/blogs")}>All Blogs</button>
        <button className="secondary-button" onClick={() => navigate("/")}>Home</button>
      </nav>
      {children}
    </div>
  );
};

export default BlogPage;