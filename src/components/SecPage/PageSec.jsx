import React from 'react'
import './Page-2.css'
import { useEffect } from 'react'
import Event1 from '../../assets/event1.jpg'
import Event2 from '../../assets/event2.png'
import Event3 from '../../assets/event3.jpg'
import Event4 from '../../assets/event4.jpg'
import Event5 from '../../assets/event5.jpg'



const PageSec = ({EventRef}) => {
    useEffect(() => {
        const panels = document.querySelectorAll(".panel");

        panels.forEach((panels) => {
            panels.addEventListener("click", () => {
                removeActiceClasses();
                panels.classList.add("active");
            });

        });

        function removeActiceClasses() {
            panels.forEach((panels) => {
                panels.classList.remove("active");

            });

        }
    })
    return (
        <div className="PageSecond" name ="events" ref={EventRef}>
            <div className="container">
                <div
                    className="panel active"
                    style={{
                        backgroundImage:
                            `url(${Event1})`,
                              backgroundColor: "white",
                              border: "1px solid white"
                    }}
                >
                    <button className='btn-event'><a href="https://lu.ma/5z0wgmgi"> Check It Out</a></button>
                    <button className='btn-vid-event'><a href="https://lu.ma/5z0wgmgi"> Watch Video</a></button>
                </div>
                <div
                    className="panel"
                    style={{
                        backgroundImage:
                            `url(${Event2})`,
                              backgroundColor: "white",
                              border: "1px solid white"
                    }}
                >
                    <button className='btn-event'><a href="https://lu.ma/5z0wgmgi"> Check It Out</a></button>
                    <button className='btn-vid-event'><a href="https://lu.ma/5z0wgmgi"> Watch Video</a></button>
                </div>
                <div
                    className="panel"
                    style={{
                        backgroundImage:
                            `url(${Event3})`,
                              backgroundColor: "white",
                              border: "1px solid white"
                    }}
                >
                    <button className='btn-event'><a href="https://lu.ma/5z0wgmgi"> Check It Out</a></button>
                    <button className='btn-vid-event'><a href="https://lu.ma/5z0wgmgi"> Watch Video</a></button>
                    
                </div>
                <div
                    className="panel"
                    style={{
                        backgroundImage:
                            `url(${Event4})`,
                              backgroundColor: "white",
                              border: "1px solid white"
                    }}
                >
                    <button className='btn-event'><a href="https://lu.ma/5z0wgmgi"> Check It Out</a></button>
                    <button className='btn-vid-event'><a href="https://lu.ma/5z0wgmgi"> Watch Video</a></button>
                </div>
                <div
                    className="panel"
                    style={{
                        backgroundImage:
                            `url(${Event5})`,
                            backgroundColor: "white",
                              border: "1px solid white"
                    }}
                >
                    <button className='btn-event'><a href="https://lu.ma/5z0wgmgi"> Check It Out</a></button>
                    <button className='btn-vid-event'><a href="https://lu.ma/5z0wgmgi"> Watch Video</a></button>
                </div>
            </div>

        </div>
    )
}

export default PageSec