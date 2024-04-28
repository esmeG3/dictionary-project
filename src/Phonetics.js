import React from "react";

export default function Phonetics(props) {
    if (props.pheonetic) {
    return (
        <div className ="Phonetics">
     {props.pheonetic}
        </div>
    );
} else {
    return null;
}
}