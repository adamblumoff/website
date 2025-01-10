import React from "react";
import "../styles/playerStats.css";

const PlayerStats = () => {
    return (
        <div id = "playerStats">
            <h1>Adam Blumoff Level 22</h1>
            <div id = "playerStats_lines">
                <span id = "playerStats_lines_thick"></span>
                <span id = "playerStats_lines_thin"></span>
            </div>
            <h2>Computer Science Student</h2>
        </div>
    );
};

export default PlayerStats;

