import React from "react";
import materialInfo from "../material.json";

const Introduction = () => {
    const { Introduction } = materialInfo;
    
    return(
            <div className="introduction">
            {Introduction.Section.Description.map((sentence,index) => (
                    <p key={index}>
                        {sentence}
                    </p>
                ))}
            </div>
    )
}

export default Introduction;