import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

export default function ProjectList(){
    return (
        <>
        <Header />
        <div className="project-list">
            <div>
                <h2 className="main-h2">React Project List</h2>
            </div>
            <ol>
                <Link className="links" to={'/projects/info-site'}>
                <li className="project-name">React info site</li>
                </Link>

                <Link className="links" to={'/projects/business-cards'}>
                <li className="project-name">React digital business cards</li>
                </Link>
            </ol>
        </div>
        </>
    )
}




