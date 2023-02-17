import pdf from "../photos/master_presentation.pdf"
import myimg from "../photos/_MG_9791.JPG"
import { Link } from 'react-router-dom'
import klimahuset from "../photos/MUSEUM/klimahuset.JPG"
import hand from "../photos/MUSEUM/tangible_hand.JPG"
import kistefoss from "../photos/MUSEUM/kistefoss.jpg"
import framework from "../photos/MUSEUM/framework.png"
import analysis from "../photos/MUSEUM/analysis.jpg"
import patterns from "../photos/MUSEUM/patternss.png"


export const Meaningfulness = () => {

    return (
        <div className="relative m-auto p-3 max-w-5xl ">
            <h1 className="my-3 text-6xl font-Neuemontreal-book">Finding <span>meaning</span> in the museum</h1>


            <div className="my-4">
                <p>Thesis submitted for the degree of Master in Informatics: design, use, interaction.</p>
                <p>University of Oslo, spring 2022.</p>
            </div>
            <div className="">

                <img alt="" src={myimg} title="Photo credit: Silje Marie Flaaten"></img>

                <p className="p-1 italic">‘Point of View’ by Elmgreen & Dragset, exhibited at Kistefoss museum.</p>

            </div>

            <br />


            <p className="py-3 text-xl">
                This thesis has forever changed museum-going for me. The thesis project started as an exploration of how designers through interactive installation design can take part in public discourses.
                This thesis fills a gap in the literature where the term <span className="italic">meaningfulness</span> is explored through a museum context for designers working with exhibition- and experience-design, where meaningfulness is understood as a design quality that promote reflective dialogue.
                Special attention has been given to museums that disseminate knowledge on sustainability, aiming to encourage social action, like climate consciousness or climate action, as examples of meaningful behaviour that museums would want to encourage.
                This showcases how interaction-designers through interactive experience design can partake in the shaping of future public rooms where dialogue, reflection, education and learning is found.
            </p>

            <div className="relative">
                <p className=" text-9xl">*</p>
                <a
                    href={pdf}
                    
                    title="master_presentation.pdf"
                    className="absolute bottom-1 left-5 border-2 text-xl font-Neuemontreal-book hover:underline hover:text-black hover:bg-white hover:border-black bg-black p-3 py-1 rounded-full text-white">
                    Skim through the presentation
                </a>

                <a
                    className=" absolute left-5 text-xl border-2 font-Neuemontreal-book hover:underline hover:border-black hover:text-black hover:bg-white bg-black p-3 py-1 rounded-full text-white"
                    href="https://www.duo.uio.no/handle/10852/96720"
                    title="https://www.duo.uio.no/handle/10852/96720">
                    Read and Download from DUO Research Archive
                </a>
            </div>

            <br />
            <br />
            <br />

            <p className="text-3xl">The thesis project is framed through the research question:
                <span className="hover:italic"> How can one design meaningful interactive experiences in a museum space?</span>
            </p>

            <div>
                <p className="my-6 text-xl">
                    In the attempt to answer this, I have composed a theoretical framework that frames a place-centred understanding of meaningfulness.
                    The framework can be used in exhibition spaces, where one through analysis of installations can identify how one can support or extend the exhibition to become more dialogic and thus, meaningful.
                    An interactive installation or experience have the potential to reinforce the message conveyed in a manner that give rise to thought-provoking or significant reflections that last long after the museum visit.
                    The hypothesis is that there lies value for the museum to judge whether or not their exhibitions promote dialogue in compliance with the museums agenda and vision.
                </p>
            </div>

            <h1 className="mt-12 text-4xl text-center font-display">Design Process</h1>
            <div className="max-w-4xl m-auto">
                <div className="border-black grid grid-cols-1 sm:grid-cols-2  p-4 gap-10  m-auto" >

                    <article>
                        <img alt="" src={klimahuset} className="w-full aspect-square object-cover"></img>
                        <p to="/meaningful" className="text-center w-full mt-4 " title="Photo credit: Silje Marie Flaaten">
                            <p className="text-center mt-4">The project was initiated through a collaboration between Klimahuset and UiO. Klimahuset provided access to their exhibition space, museum staff, docents and visitors for interviewing.</p>
                        </p>
                    </article>

                    <article>
                        <img alt="" src={kistefoss} className="w-full aspect-square object-cover"></img>
                        <p to="/sensorita" className="text-center mt-4 " title="Photo credit: Silje Marie Flaaten">
                            <p className="text-center mt-4">The dataset consist of 21 interactive installations collected from 7 different exhibitions from the MUNCH museum, Atelier Nord, Kistefoss museum, Teknisk Museum and Klimahuset.</p>
                        </p>
                    </article>

                    <article>
                        <img alt="" src={hand} className="w-full aspect-square object-cover"></img>
                        <p to="/bookingservice" className="text-center mt-4 " title="Photo credit: Silje Marie Flaaten">
                            <p className="text-center mt-4">During the project Silje designed and prototyped low-fidelity installation designs with microcontrollers. In a team of three, she designed an installation that was showcased as part of a bigger exhibition.</p>
                        </p>
                    </article>

                    <article>
                        <img alt="" src={analysis} className="w-full aspect-square object-cover"></img>
                        <p to="/bookingservice" className="text-center mt-4 " title="Photo credit: Silje Marie Flaaten">
                            <p className="text-center mt-4">The project followed an approach to research practise called Research through Design. Qualitative and quantitative analysis were conducted, e.g. through heatmapping and radar charts. </p>
                        </p>
                    </article>

                    <article>
                        <img alt="" src={patterns} className=" w-full aspect-square object-cover"></img>
                        <p to="/bookingservice" className="text-center mt-4 " title="Photo credit: Silje Marie Flaaten">
                            <p className="text-center mt-4">Derived from the analysis, Silje presented a list of 21 patterns that objectify meaningfulness as a quality that you can design for.</p>
                        </p>
                    </article>

                    <article>
                        <img alt="" src={framework} className=" w-full aspect-square object-cover"></img>
                        <p to="/bookingservice" className="text-center mt-4 " title="Photo credit: Silje Marie Flaaten">
                            <p className="text-center mt-4">At the end of the project Silje presented a framework for designers and museum curators, that can be used to identify and analyse dialogic relations between visitor and interactive installations. </p>
                        </p>
                    </article>


                </div>
            </div>

            <div>
                <Link
                    to="/">
                    <p className="mt-9 text-xl"><span className="text-1xl">☜</span> See other projects</p>

                </Link>

            </div>
        </div >
    )
}

