import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
    if (props.pheonetic) {
    return (
        <div className ="Phonetics">
            <h5>
     {props.pheonetic}
     </h5>
        </div>
    );
} else {
    return null;
}
}