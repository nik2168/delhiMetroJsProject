import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { allStationsList } from "../Stations/AllStations";
import { getData } from "../mainCode";

function App() {
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [data, setData] = useState({});

  const routeFinder = (e) => {
    e.preventDefault();

    const res = getData(fromStation, toStation);
    setData(res);
    setFromStation("");
    setToStation("");
  };
  console.log("result :", data);

  return (
    <div className=" w-[100vw] h-[100vh] flex col-auto ">
      <div className="wrapper">
        <form>
          <div className="github">Shortest Route Finder</div>
        </form>
        <form onSubmit={(e) => routeFinder(e)} className="form">
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
          {/* <div style={{ textShadow: "1px 1px 1px #333" }}>
            {"Will provide the shortest path between two stations"}
          </div> */}
          <button onClick={(e) => routeFinder(e)}>Search</button>
        </form>
      </div>
      <div className="w-[70%] h-[100vh flex justify-center items-start p-8">
        <div className="w-[7rem] h-[7rem] bg-black flex justify-center items-center font-bold">
          {data?.totalDistance} KM
        </div>
        <div className="w-[50%] h-full bg-black flex-col justify-start p-8 items-start overflow-auto font-bold">
      
      
       {  data?.stations?.map((station) => {
        return ( <div className="w-auto h-10 bg-[#333] p-2 flex justify-start relative items-center gap-3">
            <div className="h-3 w-3 bg-white rounded-[50%] ">
              <div className="h-10 left-3 top-0 w-1 bg-white absolute"></div>
            </div>
            {station?.name}
          </div>)
          
        })
          }


        </div>
        <div className="w-[7rem] h-[7rem] bg-black flex justify-center items-center font-bold">
          {data?.totalTime} MIN
        </div>
      </div>
    </div>
  );
}

export default App;
