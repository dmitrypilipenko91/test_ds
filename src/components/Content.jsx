import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaseballBall, faDisease, faFaceAngry, faGamepad, faHeart, faHouse, faIceCream,
   faImage, faRadio, faShuffle } from '@fortawesome/free-solid-svg-icons';
import '../styles/App.css';

const Content = () => {

    const [randomIcon, setRandomIcon] = useState(null);

    const generateRandomIcon = () => {
      const allIcons = [faBaseballBall, faDisease, faFaceAngry, faGamepad,
        faHeart, faHouse, faIceCream, faImage, faRadio, faShuffle]; 
      
      const randomIndex = Math.floor(Math.random() * allIcons.length); 
      
      return allIcons[randomIndex]
    };
  
    const setInitialPicture = () => {
        const initialIcon = generateRandomIcon();
        setTimeout(setRandomIcon(initialIcon), 3000)
    };
  
    useEffect(() => {
      setInitialPicture()
    }, []);
  
    const changePicture = () => {
      const newIcon = generateRandomIcon();
      setRandomIcon(newIcon);
    }
  
    const changeWithDelay = () => {
      setTimeout(changePicture, 3000)
    };
  
    const [clickValue, setClickValue] = useState(0);
  
    const increaseClickValues = () => {
      setClickValue(clickValue + 1);
    }

    return (
        <div className="content">
            <FontAwesomeIcon icon={randomIcon} size='5x'></FontAwesomeIcon>
            <button onClick={() => {changeWithDelay();increaseClickValues()}}>Get a random picture!</button>
            <span>Clicks - {clickValue}</span>
        </div>
    )
};

export default Content;