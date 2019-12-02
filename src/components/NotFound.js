import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h3>Link not found</h3>
      <Link to="/">
        <button>Return</button>
      </Link>
    </div>
  );
}