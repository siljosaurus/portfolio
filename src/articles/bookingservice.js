import { Link } from "react-router-dom"
import service from "../photos/BOOKING/servicedesign.gif"
import beito from "../photos/BOOKING/beito.jpg"
import fireplace from "../photos/BOOKING/fireplace.jpeg"
import stjerneskinn from "../photos/BOOKING/stjerneskinn.jpg"
import juv from "../photos/BOOKING/juv.jpg"





export const Bookingservice = () => {
    return (

        <div className="relative m-auto p-3 max-w-5xl ">
            <h1 className="text-4xl text-center m-3 font-Neuemontreal-book">
                Booking Service Project</h1>

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
                        <img alt="" src={stjerneskinn} className="w-full aspect-square object-cover"></img>
                        <Link to="/meaningful" className="text-center w-full mt-4 hover:underline" title="Photo credit: Silje Marie Flaaten">
                            <p className="text-center mt-4"></p>
                        </Link>
                    </article>

                    <article>
                        <img alt="" src={beito} className="w-full aspect-square object-cover"></img>
                        <Link to="/sensorita" className="text-center mt-4 hover:underline" title="Photo credit: Silje Marie Flaaten">
                            <p className="text-center mt-4"></p>
                        </Link>
                    </article>

                    <article>
                        <img alt="" src={fireplace} className="w-full aspect-square object-cover"></img>
                        <Link to="/bookingservice" className="text-center mt-4 hover:underline" title="Photo credit: Silje Marie Flaaten">
                            <p className="text-center mt-4"></p>
                        </Link>
                    </article>

                    <article>
                        <img alt="" src={juv} className=" w-full aspect-square object-cover"></img>
                        <Link to="/bookingservice" className="text-center mt-4 hover:underline" title="Photo credit: Silje Marie Flaaten">
                            <p className="text-center mt-4"></p>
                        </Link>
                    </article>


                </div>
            </div>

            <div>
                <img alt="" src={service} className="rotate-90"></img>
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