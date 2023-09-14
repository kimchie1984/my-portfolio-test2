import React from "react";

export default function About() {
    return (
        <div className="about-container" id="about" >
                

            <div className="about-wrapper">


                <h1 className="about-title">About me</h1>

                <h2 className="about-headline">
                    Front-End Developer, A cat lover & A food lover
                </h2>

                <p className="about-desc">
                    <p className="about-desc-1">
                        "I'm a passionate Front-End Developer with a love for coding, cats, and food. My coding journey began with completing an HTML and CSS course on BrainStation.io. Since then, I've evolved into a self-taught developer, focusing on JavaScript and React through FreeCodeCamp.org and Scrimba.com.
                    </p><br/>

                    <p className="about-desc-2">
                        When I'm not in front of my computer, you'll often find me in the kitchen, cooking up delicious meals for my family. Balancing my time for my family is just as important to me as my coding adventures. And whenever my cat decides to grace me with their presence in front of the computer, I can't resist a good petting session.
                    </p><br/>
                   
                    <p className="about-desc-3">
                        My daily routine revolves around continuous learning, whether it's mastering React, exploring WordPress, or other coding adventures. I'm committed to honing my skills and have a strong presence on GitHub and Netlify, where I showcase my projects. Recently, I decided to dedicate my full focus to coding, leaving behind a career in electronic wiring assembly to pursue opportunities as a Front-End or React Developer. Let's create something amazing together!"
                    </p>
                </p>


            </div>

            <div className="img--btn">

                <img className="abstract-img" src="./images/2ndaryphoto.jpg" alt="A whole body photo of Christy, looking at the top."/>

                <button className="about-btn" >
                    <a 
                        href="https://drive.google.com/file/d/1OTt5kH1nkqPwbTrH7ZG2Zso9U2Fo1zMd/view?usp=drive_link" target="_blank"
                        rel="noopener noreferrer"
                    >
                        My Resume
                    </a>
                </button>

            </div>
            


        </div>
    )
}