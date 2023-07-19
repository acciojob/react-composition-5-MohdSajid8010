import React, { useState } from "react";
const Tabs = ({ tabs }) => {
    const [cont_tab, setCont_tab] = useState("")

    return (
        <div>
            <ul>
                {
                    tabs.map((obj, i) => {
                        return (
                            <li key={i} onClick={() => setCont_tab(obj.content)}>{obj.title}</li>
                        )
                    })
                }
            </ul>
            <p>{cont_tab}</p>
        </div>
    );
};
export default Tabs