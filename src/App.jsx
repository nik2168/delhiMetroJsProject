import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { allStationsList } from "../Stations/AllStations";
import { getData } from "../mainCode";
import { FaArrowAltCircleDown } from "react-icons/fa";


function App() {
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [data, setData] = useState({});

  const routeFinder = (e) => {
    e.preventDefault();

    const res = getData(fromStation, toStation);
    setData(res);
  };



  return (
    <div className=" w-[100vw] h-[100vh] lg:flex  sm:flex-row">
      <div className="wrapper">
        <form>
          <div className="github">PLAN YOUR JOURNEY </div>
        </form>
        <form onSubmit={(e) => routeFinder(e)} className="form">
          <div className="inputContainer">
            <input
              type="text"
              placeholder="from station"
              list="experiencelist"
              value={fromStation}
              onChange={(e) => setFromStation(e.currentTarget.value)}
            />
            <datalist id="experiencelist">
              {allStationsList.map((i, idx) => {
                return <option key={idx} value={`${i}`} />;
              })}
            </datalist>
            <input
              type="text"
              placeholder="to station"
              list="experiencelist"
              value={toStation}
              onChange={(e) => setToStation(e.currentTarget.value)}
            />
          </div>
          {/* <div style={{ textShadow: "1px 1px 1px #333" }}>
            {"Will provide the shortest path between two stations"}
          </div> */}
          <button onClick={(e) => routeFinder(e)} className='hover:bg-blue-500' >Search</button>
        </form>
      </div>
      <div className="lg:w-[80vw] lg:h-[100vh] sm:w-full sm:h-full flex justify-center  items-start p-8 bg-[#BDD5EA] ">
        <div className="w-[100%] h-[100%] flex-col justify-center backdrop-blur-[8px]  items-start rounded-md overflow-hidden">
          <div className="lg:w-[73%] sm:w-full gap-5 pl-10 pt-4  h-[7rem] rounded-md overflow-hidden flex lg:justify-center sm:justify-start">
            <div className="w-[40%] h-[4rem] rounded-md bg-white text-black flex justify-center lg:pl-10 p-3 items-center font-bold">
              Distance : {data?.totalDistance} KM
            </div>
            <div className="w-[40%] h-[4rem] rounded-md bg-white text-black p-3 flex justify-center lg:pl-10 items-center font-bold">
              Time : {data?.totalTime} MIN
            </div>
          </div>
          <div className="w-[70%] h-[90%] flex-col justify-start lg:pl-[5rem] sm:pl-[1rem] items-start overflow-auto font-bold py-[6rem]">
            {data?.stations?.map((station, idx) => {
              let colr = station?.linename?.substring(
                0,
                station?.linename?.length - 4
              );
              return (
                <div
                  key={idx}
                  style={{ color: `${colr}` }}
                  className="w-auto p-2 flex flex-col justify-start relative items-center gap-1"
                >
                  <p className="w-auto h-8  bg-gray-100 rounded-md p-[1.5rem] flex justify-center items-center">
                    {station?.name}
                  </p>

                  {data?.stations?.length - 1 > idx && (
                    <FaArrowAltCircleDown
                      style={{ color: `${colr}` }}
                      size={20}
                      className={`color-${colr}`}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
