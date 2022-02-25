import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAllWordbank } from "../services/wordbankService";

export const BusinessPlanContainer = () => {
    const [sectionOne, setSectionOne] = useState("");

    return (
       

        <div className="section-title">
            <div>
               <Link to="/mission-statement"> <button>Mission Statement</button></Link>
            </div>

            <div>
               <Link to="/product-service"> <button>Product/Service</button></Link>
           </div>

           <div>
                <Link to="/marketing"><button>Marketing {getAllWordbank.Marketing}</button></Link>
           </div>

           <div>
                <Link to="/finance"><button>Finance</button></Link>
           </div>


        </div>

    )
}

export default BusinessPlanContainer;