import { Link } from "react-router-dom"
import service from "../photos/BOOKING/servicedesign.gif"
import beito from "../photos/BOOKING/beito.jpg"
import visitbeito from "../photos/BOOKING/visitbeito.png"
import juv from "../photos/BOOKING/juv.jpg"
import microservices from "../photos/BOOKING/microservices.png"

export const Bookingservice = () => {
    return (

        <div className="relative m-auto p-3 max-w-5xl ">
            <h1 className="text-4xl text-center m-3 font-Neuemontreal-book">
                Booking Service Project</h1>

            <div className="my-3">
                <p className=" font-bold text-lg ">Deliverance</p>
                <p>UX research report</p>
                <p>Service design</p>
                <p>Lean startup</p>
            </div>

            <h1 className="mt-12 text-4xl text-center font-display">Design Process</h1>
            <div className="max-w-4xl m-auto">
                <div className="border-black grid grid-cols-1 sm:grid-cols-2  p-4 gap-10  m-auto" >
                    
                    <article>
                        <img alt="" src={beito} className="w-full aspect-square object-cover"></img>
                        <p className="text-center mt-4 " title="Photo credit: Silje Marie Flaaten">
                            <p className="text-center mt-4">Beitostølen Booking Service is a family-run business that rents private cabins and apartments on Beitostølen. They have done this since 1997, and can today offer over 100 private cabins, apartments and cottages through their websites.</p>
                        </p>
                    </article>

                    <article>
                        <img alt="" src={juv} className=" w-full aspect-square object-cover"></img>
                        <p className="text-center mt-4" title="Photo credit: Silje Marie Flaaten">
                            <p className="text-center mt-4">Silje conducted semistructured interviews with different activity based firms, e.g. Beitostølen Husky Tours, Beito Aktiv & Skiskole, Myhre Gård, Bike Beitostølen. The interviews were conducted at the same time as Silje herself took part in group activities as a participant and photographer. In that way, she could talk to the activity founders in an informal setting, and gather user perspectives from her own and the activity group's experiences.</p>
                        </p>
                    </article>

                    <article>
                        <img alt="" src={microservices} className="w-full aspect-square object-cover"></img>
                        <p className="text-center w-full mt-4" title="Photo credit: Silje Marie Flaaten">
                            <p className="text-center mt-4">Together with the founder, Silje participated in meetings with a group of stakeholders at Beitostølen who had recently founded Beitostølen Utvikling SA. Silje was challenged to share insights from the project with Booking Service, and advise on design and development choices for the new destination portal.</p>
                        </p>
                    </article>

                    <article>
                        <img alt="" src={visitbeito} className="w-full aspect-square object-contain"></img>
                        <p className="text-center w-full mt-4" title="Photo credit: Silje Marie Flaaten">
                            <p className="text-center mt-4"></p>
                        </p>
                    </article>

                   

                </div>
            </div>

            <div>
                <img alt="" src={service} className="rotate-90 max-w-4xl m-auto"></img>
                <p>hehldhjf</p>
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