import React, { useEffect, useRef, useState } from "react";
import Background from "../Components/Background/Background";
import Hero from "../Components/Hero/Hero";

function Home() {

    const heroData = [
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
    }, [heroData.length]);

    return (
        <>
            <Background playStatus={playStatus} heroCount={heroCount} />
            <Hero
                setPlayStatus={setPlayStatus}
                heroData={heroData}
                heroCount={heroCount}
                setHeroCount={setHeroCount}
                playStatus={playStatus}
            />
        </>
    )
}

export default Home;