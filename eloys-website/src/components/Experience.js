import React from "react";
import materialInfo from "../material.json";

const Experience = () => {

    const experienceInfo = materialInfo.Experience_Info;
    
    return(
        <div>
            <div className="experienceHeader"> 
                Experience
                <div className="experienceCompany">
                    {experienceInfo.Company}
                    <div className="experienceRole">
                        {experienceInfo.Role}
                        <div className="experienceDate">
                            {experienceInfo.Start_Date} - {experienceInfo.End_Date}
                            <div className="experienceDescription">
                                {experienceInfo.Description}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;