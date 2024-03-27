import React from "react";

import { Link } from "react-router-dom/cjs/react-router-dom.min";


function Banner() {
    return (
        <div className="banner">
            <p>
                New! For educational materials, check out <Link to="/songbeejr" className="nav-links">www.songbeejr.com</Link>
            </p>
        </div>
    )
}

export default Banner
