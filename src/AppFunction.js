import React, { useState, useEffect } from 'react'
import Cars from "./Cars.json";

const initialLocationState = {
    latitude: null,
    longitude: null,
    speed: null
}

const App = () => {

    const [count, setCount] = useState(0);
    const [isOn, setIsOn] = useState(false);
    const [mousePosition, setMousePosition] = useState({x: null, y: null})
    const [status, setStatus] = useState(navigator.onLine);
    const [{latitude, longitude, speed}, setLocation] = useState(initialLocationState);
    
    let mounted = true;
    let car1 = ["https://lmtrain.github.io/lm-images/assets/images/bugatti_1.jpg",
            "https://lmtrain.github.io/lm-images/assets/images/bugatti_2.jpg",
            "https://lmtrain.github.io/lm-images/assets/images/futurecar7.jpg",
            "https://lmtrain.github.io/lm-images/assets/images/bugattinoire.jpg",
            "https://lmtrain.github.io/lm-images/assets/images/bugatti_5.jpg",
            "https://lmtrain.github.io/lm-images/assets/images/ferrari_1.jpg",      
            "https://lmtrain.github.io/lm-images/assets/images/ferrari_2.jpg",
            "https://lmtrain.github.io/lm-images/assets/images/ferrari_3.jpg",
            "https://lmtrain.github.io/lm-images/assets/images/futurecar17.jpg",
            "https://lmtrain.github.io/lm-images/assets/images/lambo_2.jpg",
            "https://lmtrain.github.io/lm-images/assets/images/futurecar11.jpg",
            "https://lmtrain.github.io/lm-images/assets/images/futurecar2.jpg",
            "https://lmtrain.github.io/lm-images/assets/images/bugatti_3.jpg",
            "https://lmtrain.github.io/lm-images/assets/images/bugatti_4.jpg",
            "https://lmtrain.github.io/lm-images/assets/images/lambo_1.jpg",
            "https://lmtrain.github.io/lm-images/assets/images/bmw_1.jpg",
            "https://lmtrain.github.io/lm-images/assets/images/bmw_2.jpg",
            "https://lmtrain.github.io/lm-images/assets/images/futurecar1.jpg",
            "https://lmtrain.github.io/lm-images/assets/images/futurecar3.jpg",
            "https://lmtrain.github.io/lm-images/assets/images/futurecar4.jpg",
            "https://lmtrain.github.io/lm-images/assets/images/futurecar5.jpg",
            "https://lmtrain.github.io/lm-images/assets/images/futurecar6.jpg",
            "https://lmtrain.github.io/lm-images/assets/images/futurecar8.jpg",
            "https://lmtrain.github.io/lm-images/assets/images/futurecar9.jpg",
            "https://lmtrain.github.io/lm-images/assets/images/futurecar9.jpg",
            "https://lmtrain.github.io/lm-images/assets/images/futurecar18.jpg",
            "https://lmtrain.github.io/lm-images/assets/images/futurecar20.jpg",
            "https://lmtrain.github.io/lm-images/assets/images/mydejavuredcar2.jpg",
            "https://lmtrain.github.io/lm-images/assets/images/bugatti_chiron%20sport_2.jpg",
            "https://lmtrain.github.io/lm-images/assets/images/mybmwm6.jpg",
            "https://lmtrain.github.io/lm-images/assets/images/futurecar14.jpg",
            "https://lmtrain.github.io/lm-images/assets/images/ls_field-cnn.jpg",
        ];

    useEffect(
        () => {

            document.title = `You have clicked this ${count} times`;
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('online', handleOnline);
            window.addEventListener('offline', handleOffline);
            navigator.geolocation.getCurrentPosition(handleGeolocation);
            const watchId = navigator.geolocation.watchPosition(handleGeolocation)

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('online', handleOnline);
                window.removeEventListener('offline', handleOffline);
                navigator.geolocation.clearWatch(watchId);
                mounted = true;
            };
        },
        [count]
    );
    const handleGeolocation = event => {
        if (mounted) {

            setLocation({
                latitude: event.coords.latitude,
                longitude: event.coords.longitude,
                speed: event.coords.speed
            })
        }
    }

    const handleOnline = () => {
        setStatus(true)
    }

    const handleOffline =() => {
        setStatus(false)
    }

    const handleMouseMove = event => {
        setMousePosition({
            x: event.pageX,
            y: event.pageY
        })
    }

    const incrementCount = () => {
        if (count >= 31) {
            setCount(count * 0)
            setCount(prevCount => prevCount + 1 )
        }
        else
        
        setCount(prevCount => prevCount + 1 )
       
    };

    const toggleLight = () => {
        if (count >= 31) {
            setCount(0)
            setCount(prevCount => prevCount + 1 )
        }
        else
        setCount(count)
        setCount(prevCount => prevCount + 1 )
        
    }

    return (
        <>
                <h2>Images of Cars of The Future</h2>
            <div>
                <button onClick={incrementCount}>{"Forward >>>"} {count} </button>
            </div>
                <img
                src={
                    car1[count]
                    
                }
                style={{
                height: '500px',
                width: '750px',
                }}
                alt="Flashlight"
                
            />
            
      
            <div>
                <br></br>
                <button onClick={toggleLight}> {"<<< Back"} {count}</button>
            </div>
            
            <img
                src={
                    isOn 
                    ? car1[count +1]
                    : car1[count -1]
                }
                style={{
                height: '500px',
                width: '750px',
                }}
                alt="Click 1st button at the top to change and see a new car"
                
            />

            <h2>Mouse Position</h2>
            {JSON.stringify(mousePosition, null, 2)}
            <br />

            <h2>Network Status</h2>
            <p>
                You are <strong>{status ? "online" : "offline"}</strong>
            </p>

            <h2>Geolocation</h2>
            <p>Latitude is {latitude}</p>
            <p>Longitude is {longitude}</p>
            <p>Your speed is {speed ? speed : "0"}</p>
        </>
    );
        
    
};

export default App;