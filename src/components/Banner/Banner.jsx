import React from "react";

import { Link } from "react-router-dom/cjs/react-router-dom.min";

import './Banner.css'


function Banner() {
    return (
        <div className="banner">
            <p>
                New! For educational materials, see <Link to="/songbeejr"><span>www.songbeejr.com</span></Link>
            </p>
        </div>
    )
}

export default Banner
