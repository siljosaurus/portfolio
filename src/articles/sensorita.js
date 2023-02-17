import befaring from "../photos/SENSORITA/befaring.JPG"
import trashpose from "../photos/SENSORITA/trash_pose.jpeg"
import movingtrash from "../photos/SENSORITA/moving_trash.jpeg"
import logging from "../photos/SENSORITA/logging.jpeg"
import loggingtrash from "../photos/SENSORITA/logging_trash.jpeg"
import standulla from "../photos/SENSORITA/stand_ulla.jpeg"
import stand from "../photos/SENSORITA/stand.jpeg"
import { Link } from "react-router-dom"

export const Sensorita = () => {

    return (
        <div className="relative max-w-5xl m-auto p-3 ">
            <h1 className=" text-5xl my-3 font-Neuemontreal-book">Conducting UX research in the waste management industry</h1>
            <h2 className=" font-Neuemontreal-book ">Delivering insights and validating the need for automatic emptying services.</h2>

            <div className="my-3">
                <img src={trashpose} alt="" title="Photo credit: Silje Marie Flaaten"></img>
                <p className="p-1 italic"></p>
            </div>

            <a
                href="https://sensorita.com/"
                title="Link to sensorita.com"
                className="border-2 text-xl font-Neuemontreal-book hover:underline hover:text-black hover:bg-white hover:border-black bg-black p-3 py-1 rounded-full text-white">
                Sensorita.com
            </a>

            <div className="my-3">
                <p className=" font-bold">Project Overview</p>
                <p>Sensorita is a startup developing a sensor to measure filling levels in open waste containers. The sensor and web system allows users to digitize their containers and track waste levels. Silje was responsible for designing and developing a proof-of-concept of the web service, and gathered insights to validate the need for automatic emptying services.</p>
            </div>


            <div className="my-3">
                <p className=" font-bold text-lg ">Services</p>
                <p>UX research</p>
                <p>Service design</p>
                <p>Lean startup</p>
            </div>

            <h1 className="mt-12 text-4xl text-center font-display">Design Process</h1>
            
            <div className="max-w-4xl m-auto">
                <div className="border-black grid grid-cols-1 sm:grid-cols-2  p-4 gap-10  m-auto" >
                   
                    <article>
                        <img alt="" src={befaring} className="w-full aspect-square object-cover" title="Photo credit: Silje Marie Flaaten"></img>
                        <Link to="/meaningful" className="text-center w-full mt-4 hover:underline">
                            <p className="text-center mt-4">Befaring</p>
                        </Link>
                    </article>

                    <article>
                        <img alt="" src={movingtrash} className="w-full aspect-square object-cover" title="Photo credit: Silje Marie Flaaten"></img>
                        <Link to="/sensorita" className="text-center mt-4 hover:underline">
                            <p className="text-center mt-4"></p>
                        </Link>
                    </article>

                    <article>
                        <img alt="" src={logging} className="w-full aspect-square object-cover" title="Photo credit: Silje Marie Flaaten"></img>
                        <Link to="/bookingservice" className="text-center mt-4 hover:underline">
                            <p className="text-center mt-4"></p>
                        </Link>
                    </article>

                    <article>
                        <img alt="" src={loggingtrash} className="w-full aspect-square object-cover" title="Photo credit: Silje Marie Flaaten"></img>
                        <Link to="/bookingservice" className="text-center mt-4 hover:underline">
                            <p className="text-center mt-4"></p>
                        </Link>
                    </article>
                    
                    <article>
                        <img alt="" src={standulla} className="w-full aspect-square object-cover" title="Photo credit: Silje Marie Flaaten"></img>
                        <Link to="/bookingservice" className="text-center mt-4 hover:underline">
                            <p className="text-center mt-4"></p>
                        </Link>
                    </article>

                    <article>
                        <img alt="" src={stand} className="w-full aspect-square object-cover" title="Photo credit: Silje Marie Flaaten"></img>
                        <Link to="/bookingservice" className="text-center mt-4 hover:underline">
                            <p className="text-center mt-4"></p>
                        </Link>
                    </article>
                    
                </div>
            </div>

            <div>
                <Link
                    to="/">
                    <p className="mt-9 text-xl"><span className="text-1xl">☜</span> See other projects</p>

                </Link>
            </div>

        </div>
    )
}