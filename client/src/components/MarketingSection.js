import React, { useState } from "react";

function MarketingSection({GetAllWordbank}) {
    
   
    return (

        //insert text area

        <div>
            {
                MarketingSection.map((word) => {
                    return (
                        <h3>{word}</h3>
                    )
                })
            }

        </div>

    )
}

export default MarketingSection;