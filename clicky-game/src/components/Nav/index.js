import React from "react";
import "./style.css";

function Nav (props) {
    return (
        <section>
            <h1>Score: {props.score} / 12</h1>
        </section>
    );
}

export default Nav;