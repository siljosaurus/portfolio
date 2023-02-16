import './App.css';
import picture from './photos/front-page.jpg'
import { Link } from 'react-router-dom'


function App() {
  return (
    <div className="bg-[#4321B9] min-h-screen">

      <div className="relative max-w-4xl m-auto pb-24">
        <img alt="" src={picture}
          className="w-full md:rounded-[3rem]">
        </img>

        
        <div className="text-3xl text-white absolute inset-0 z-50 flex flex-col items-center justify-center space-y-3">
          <h1 className="relative text-lg font-Neuemontreal-book ">
            Hi, I'm Silje! A creative designer and developer in Netlight, Oslo.
          </h1>
 
          <p className='text-1xl'>Project portfolio:</p>
         <Link
            className="hover:underline font-Neuemontreal-book text-lg"
            to="/sensorita">
              Sensorita
          </Link>
          <Link
            className="hover:underline font-Neuemontreal-book text-lg"
            to="/bookingservice">
              Booking Service
          </Link>
         

          <Link
            className="hover:underline font-Neuemontreal-book text-lg"
            to="/meaningful">
            Meaningfulness
          </Link>

          <Link
            className="hover:underline font-Neuemontreal-book text-lg"
            to="/waiting">
            Venterommet
          </Link>

          <Link
            className="hover:underline font-Neuemontreal-book text-lg"
            to="/frames">
            The frame collection
          </Link>

        </div>

        <Link
            className="hover:underline font-Neuemontreal-book text-lg "
            to="/manifesto">
            Manifesto
        </Link>

      </div>

    </div>
  );
}

export default App;
