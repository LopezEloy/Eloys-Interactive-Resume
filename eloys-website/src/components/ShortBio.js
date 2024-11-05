import React from "react";
import materialInfo from "../material.json";

const ShortBio = () => {
    const { ShortBio } = materialInfo;

    return(
            <div className="shortBio">
            {ShortBio.Section.Description}
            </div>
    )
}

export default ShortBio;