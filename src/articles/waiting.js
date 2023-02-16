import waitingframe from "../photos/waitingframe.svg"


export const Waiting = () => {
    return(
        <div className="min-h-screen">
            <div className="text-center m-auto max-w-4xl">
                <h1 className="text-5xl center">The Loading Screen</h1>
                <h2 className="'">An exploration of designing for waiting experiences</h2>

                <button className="bg-indigo-500 m-5 p-3 rounded-full">
                    <svg class="animate-spin ml-1 mr-3 h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                </button>

                <h1 className="text-4xl ">The loading screen</h1>
                

                <div className="relative flex max-w-4xl m-auto pb-24 bg-yellow-100" >
                    <img alt="" src={waitingframe} className="absolute inset-0 h-24 bg-blue-100 w-full md:rounded-[3rem]" />

                    <div className="p-24">
                        <h2>An exploration of designing for waiting experiences</h2>
                        <p>Venterommet kjenner vi til. Et midlertidig sted, en mellomstasjon.  Togperrongen, for-værelset på legekontoret, gangen utenfor universitetsaulaen. Andre ganger kan steder som ikke er venterom, være et venterom; kaféen, biblioteket, bussen. Egentlig, så er ikke ventingen nødvendigvis tilknyttet stedet du oppholder deg i - men usynlige ytre faktorer som tvinger deg inn i denne midlertidige tilstanden på disse stedene. Inn i ventetilstanden.</p>
                        <p>Og hva gjør vi da? På kaféen vil det kanskje føles naturlig å kjøpe en kaffe eller en scones, på biblioteket åpner du en bok eller et magasin. På bussen people-watcher du. Noen ganger bare er du, eksisterer i en meditativ tilstand, hvor du tenker og har indre monologer. Tygger på dagens episode av livet.</p>
                        <p>Eller så sitter du på mobilen da, såklart. Setter på noe musikk eller en podcast, leser på nettavis, ser gjennom bildearkivet ditt. Åpner tiktok. Uansett hva du gjør, så går tiden den. Og plutselig!, rives du ut av tilstanden. Venninnen din dukket opp, legen kaller deg inn, forelesningen starter. </p>
                        <p>Jeg har ventet mye i den siste tiden. Ventet på mye forskjellig. Noen ting er helt utenfor min kontroll, som gjør at ventetiden dras ut og blir uviss. Det er vanskelig å vite når den slutter, og det er ingenting annet å gjøre enn å vente. Andre ting er vel innenfor min kontroll, og gjør at jeg med enkle grep kan komme ut av tilstanden.</p>
                
                        <p>Hvordan kan digital venting bli litt mer koselig? :p </p>  
                    </div>
                </div>
            </div>


        </div>
    )
}

