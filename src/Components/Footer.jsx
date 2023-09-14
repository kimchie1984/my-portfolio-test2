import React from "react";

export default function Footer() {
    return (
        <div className="footer-container">

            <div className="sm-wrapper">

                <a 
                    href="https://twitter.com/kimchie1984" 
                    target="_blank"
                    rel="noopener noreferrer">

                        <img 
                        className="icon" 
                        src="./images/tweet.PNG"/>
                </a>

                <a 
                    href="https://github.com/kimchie1984"
                    target="_blank"
                    rel="noopener noreferrer">

                        <img 
                        className= "icon" 
                        src="./images/githubblack.PNG"/>
                </a>

                <a
                    href="https://codepen.io/your-work/"
                    target="_blank"
                    rel="noopener noreferrer">
                        
                        <img 
                        className="icon" 
                        src="./images/codepen.PNG" />
                </a> 

                <a
                    href="https://www.linkedin.com/in/christy-lauderes-ampong-90552b183/"
                    target="_blank"
                    rel="noopener noreferrer">

                        <img 
                        className="icon" 
                        src="./images/linkedIn.PNG"/>
                </a>

            </div>


        </div>
    )
}