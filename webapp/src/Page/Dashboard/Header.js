import React from "react";
import { RiFileExcel2Fill } from "react-icons/ri";

function Header({ setIsAdding, setIsDrop }) {
  return (
    <header>
      <h1 align="centre">STUDENTS DETAILS</h1>
      <div className="container">
        <div style={{ marginTop: "30px", marginBottom: "18px" }}>
          <button onClick={() => setIsAdding(true)} inline="true" margin-right>
            Add New Details{" "}
          </button>
        </div>
        <button
          class="muted-button"
          style={{ marginLeft: "1000px" }}
          onClick={() => setIsDrop(true)}
        >
          Drop File <RiFileExcel2Fill />
        </button>
      </div>
    </header>
  );
}

export default Header;
