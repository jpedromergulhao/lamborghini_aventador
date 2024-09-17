import { useEffect, useState, useRef } from 'react';
import './App.css';
import Background from "./Components/Background/Background";
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

function App() {

  let heroData = [
    { text: "Command Elite Power" },
    { text: "Feel the Rare Thrill" },
    { text: "Own the Legend" }
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setHeroCount((prevCount) => (prevCount + 1) % heroData.length);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="App">
      <Background playStatus={playStatus} heroCount={heroCount}></Background>
      <Navbar></Navbar>
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      ></Hero>
    </div>
  );
}

export default App;
