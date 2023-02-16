export const Frames = () => {
    return (
        <div>
            <div className="max-w-md m-auto">
                <h1 className="text-6xl">The frame collection</h1>
                <p className="">
                    This is an exhibition of conceptual frames made to comment projects or domains I have worked with.
                    The frame is a clickable, hoverable visual element found in most websites.
                    It has both functional and aesthetic qualities, and when they work well together they synthesise a usable element that captures attention and directs action.

                </p>
                <p>Strong boundaries.</p>
            </div>
            <p>The mountain collection</p>
            <div className="border-black grid  p-4 gap-4  m-auto" style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))"
            }}>

                <p className="h-48 bg-purple-300 text-purple-900 font-bold text-center rounded-md">Stein, bilde, farger, linjer</p>
                <p className="h-48 bg-purple-300 text-purple-900 font-bold text-center rounded-md">Mose, texture</p>
                <p className="h-48 bg-purple-300 text-purple-900 font-bold text-center rounded-md">Snø, grit texture</p>
                <p className="h-48 bg-purple-300 text-purple-900 font-bold text-center rounded-md">Fjell, linjer</p>
                <p className="h-48 bg-purple-300 text-purple-900 font-bold text-center rounded-md">HEI</p>
                <p className="h-48 bg-purple-300 text-purple-900 font-bold text-center rounded-md">HEI</p>
                <p className="h-48 bg-purple-300 text-purple-900 font-bold text-center rounded-md">HEI</p>


            </div>
        </div>
    )
}