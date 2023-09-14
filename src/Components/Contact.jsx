import React from "react";

export default function Contact() {
    return (
        <div className="contact-container" id="contact">

            <div className="contact-wrapper">
                <h2 className="contact-title">Get in Touch</h2>
                <hr className="my-hr2"/>
                <p className="contact-desc">
                    "Are you in search of a dedicated and passionate frontend developer for your project, even if you're just starting out in this exciting field? Look no further! I may be new to frontend development, but I'm brimming with enthusiasm and a hunger to make your project shine. Whether you have questions, need assistance, or want to embark on this journey together, I'm just a click away. Let's create something amazing together! 😊"
                </p>
                <p className="PS">
                    P.S,
                </p>
                <p className="ps-desc">
                    You can also check-out my website blog here at
            
                        <a 
                            className="blog" href=""
                            target="_blank"
                            rel="noopener noreferrer"
                        >   <span>&rarr; </span>
                            Code Diary
                        </a>

                </p>

                <button className="contact-btn">
                    <a
                    href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSBncSgfqNDWQpRJkzPgqXSKwjTGJnvNbCKnJtkSsdWtJKzLjwHwKTHghckCksbqwxqDtvSH" 
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        christyiulian@gmail.com
                    </a>
                </button>
            </div>

        </div>
    )
}