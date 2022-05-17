import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
export default function ViewUserComponent() {
  let lasCookies = document.cookie.split(";");
  return (
    <div
      style={{
        marginTop: "100px",
        margin: "auto",
        padding: "15px",
        maxWidth: "400px",
        alingContent: "center",
      }}
    >
      <p>{lasCookies[0]}</p>
      <p>{lasCookies[1]}</p>
      <p>{lasCookies[2]}</p>
      <Link to={`/home`}>
        <button className="btn btn-view">Back</button>
      </Link>
    </div>
  );
}
