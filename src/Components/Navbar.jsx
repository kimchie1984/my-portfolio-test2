import React from "react"

export default function Navbar() {
    return (
        <div className="navbar-container">

            <img className="hero" src="./images/Hero3.jpg" alt="photo of keybord, notebook and a pen."/>

            <div className="navbar-wrapper">

                <ul className="navbar-list">

                    <li>
                        <a id="list" href="#work">Work</a>
                    </li>

                    <li>
                        <a id="list" href="#about">About</a>
                    </li>

                    <li>
                        <a id="list" href="#contact">Contact</a>
                    </li>

                </ul>

                <div className="navbar-headline">
                    <h1 className="greet">Hi, I am</h1>
                    <h1 className="name">Christy Ampong</h1>
                </div>
            </div>

            <h4 className="front-end">Front-End Developer</h4>

            <div>
                <img className="photo-id" src="./images/christy.jpeg" alt="a photo id of Christy."/>
            </div>

        </div>
    )
}