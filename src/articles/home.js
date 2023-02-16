import { Link } from "react-router-dom"
import flamme from "../photos/Flamme.gif"
import kistefoss from "../photos/MUSEUM/kistefoss.jpg"
import trashpose from "../photos/SENSORITA/trash_pose.jpeg"
import juv from "../photos/BOOKING/juv.jpg"

export const Home = () => {
    return (
        <div>
            <header className="flex flex-row items-end justify-between flex-wrap">
                <div className="flex flex-row">
                    <img src={flamme} className="h-20"></img>
                    <div className="flex flex-col justify-end">
                        <p className="font-display ">Silje Marie Flaaten</p>
                        <p className="font-display mb-1">A creative coder and designer</p>
                    </div>
                </div>
                <div className="mb-1">
                    <Link to="/about" className="m-3 text-right font-display hover:underline">About me</Link>
                </div>
            </header>
            <h1 className="mt-12 text-4xl text-center font-display">Project Portfolio</h1>
            <div className="max-w-4xl m-auto">
                <div className="border-black grid grid-cols-1 sm:grid-cols-2  p-4 gap-10  m-auto" >
                    <div>
                        <img src={kistefoss} className="w-full aspect-square object-cover"></img>
                        <Link to="/meaningful" className="text-center w-full mt-4 hover:underline">
                            <p className="text-center mt-4">UX research on interactive <br /> meaning-making in museums.</p>
                        </Link>
                    </div>
                    <article>
                        <img src={trashpose} className="w-full aspect-square object-cover"></img>
                        <Link to="/sensorita" className="text-center mt-4 hover:underline">
                            <p className="text-center mt-4">UX research on waste management.</p>
                        </Link>
                    </article>
                    <article>
                        <img src={juv} className="w-full aspect-square object-cover"></img>
                        <Link to="/bookingservice" className="text-center mt-4 hover:underline">
                            <p className="text-center mt-4">Service design for booking activities.</p>
                        </Link>
                    </article>
                    <article>
                        <img src={trashpose} className="w-full aspect-square object-cover"></img>
                        <p className="text-center mt-4">Developing microservices</p>
                    </article>
                </div>
            </div>
        </div>
    )
}