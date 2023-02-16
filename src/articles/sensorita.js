import befaring from "../photos/SENSORITA/befaring.JPG"
import trashpose from "../photos/SENSORITA/trash_pose.jpeg"
import movingtrash from "../photos/SENSORITA/moving_trash.jpeg"
import logging from "../photos/SENSORITA/logging.jpeg"
import loggingtrash from "../photos/SENSORITA/logging_trash.jpeg"
import standulla from "../photos/SENSORITA/stand_ulla.jpeg"
import stand from "../photos/SENSORITA/stand.jpeg"

export const Sensorita = () => {

    return (
        <div className="relative max-w-5xl m-auto p-3 ">
            <h1 className=" text-5xl my-3 font-Neuemontreal-book">Conducting UX research in the waste management industry</h1>
            <h2 className=" font-Neuemontreal-book ">Delivering insights and validating the need for automatic emptying services.</h2>
            
            <div className="my-3">
                <img src={trashpose} alt="" title="Photo credit: Silje Marie Flaaten"></img>
                <p className="p-1 italic">working with trash, literally...</p>
            </div>
            
            <div className="my-3">
                <p className=" font-bold text-lg ">Services</p>
                <p>UX research</p>
                <p>Service design</p>
                <p>Lean startup</p>
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
                <img src={befaring} alt="" title="Photo credit: Silje Marie Flaaten"></img>
                <p className="p-1 italic">Befaring</p>
            </div>

            

            <div className="my-3">
                <img src={movingtrash} alt="" title="Photo credit: Silje Marie Flaaten"></img>
                <p className="p-1 italic">Moving trash</p>
            </div>

            <div className="my-3">
                <img src={logging} alt="" title="Photo credit: Silje Marie Flaaten"></img>
                <p className="p-1 italic">Logging </p>
            </div>

            <div className="my-3">
                <img src={loggingtrash} alt="" title="Photo credit: Silje Marie Flaaten"></img>
                <p className="p-1 italic">Logging trash</p>
            </div>

            <div className="my-3">
                <img src={standulla} alt="" title="Photo credit: Silje Marie Flaaten"></img>
                <p className="p-1 italic">Stand area </p>
            </div>

            <div className="my-3">
                <img src={stand} alt="" title="Photo credit: Silje Marie Flaaten"></img>
                <p className="p-1 italic">Designed stand </p>
            </div>

        </div>
    )
}