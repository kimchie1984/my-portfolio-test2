import React from "react";

export default function Project(props) {
    return (
        <div className="project-container">

            <div className="personal-dashboard">
                
                <h3 className="pd">{props.title}</h3>

                <p className="desc">{props.description}
                </p>

                <ul className="project-list">
                    <li>{props.lang.list1}</li>
                    <li>{props.lang.list2}</li>
                    <li>{props.lang.list3}</li>
                    {props.lang.list4 && <li>{props.lang.list4}</li>}
                </ul>

                <div className="visit-wrapper">
                    
                    <a 
                        href={props.projectLink} 
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="visit-site">
                        {props.button} 
                        <span className="arrow">&rarr;</span>
                    </a>
                

                    <a 
                        href={props.githublink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img 
                            className="github" 
                            src={`${props.icon}`}  
                            alt="An icon of github"/>
                    </a>

                </div>


            </div>

            <div className="project-image-container">
                    <img className="journey" src={`${props.image}`} alt="a photo of a project"/>
            </div>
            

        </div>
    )
}