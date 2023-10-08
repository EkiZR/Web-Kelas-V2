import React, { useState, useEffect, useRef } from "react";
import SwipeableViews from "react-swipeable-views";

const TesButton = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [additionalButtons, setAdditionalButtons] = useState([]);
  const buttonRef = useRef(null);

  const animateButtons = async () => {
    const buttonsArray = ["1", "2", "3"];
    for (let i = 0; i < buttonsArray.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 300));
      setAdditionalButtons((prevButtons) => [...prevButtons, buttonsArray[i]]);
    }
  };

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
    if (isClicked) {
      setAdditionalButtons([]);
    } else {
      animateButtons();
    }
  };

  // Event listener untuk mengatasi klik di luar tombol
  useEffect(() => {
    function handleClickOutside(event) {
      if (buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsClicked(false);
        setAdditionalButtons([]);
      }
    }

    if (isClicked) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isClicked]);

  return (
    <div className="ml-10" ref={buttonRef}>
      <div onClick={handleButtonClick} style={{ cursor: "pointer" }}>
        <div
          className={`w-10 h-10 rounded-full flex justify-center items-center transform transition-transform duration-300 ${
            isClicked ? "rotate-120" : ""
          }`}
          id="UserButton"
        >
          <img
            src="user.svg"
            alt=""
            className={`transform transition-transform duration-300 ${
              isClicked ? "rotate-180" : ""
            }`}
          />
        </div>
      </div>
      <div className="button-container mt-4">
        <SwipeableViews
          enableMouseEvents // Aktifkan event mouse
          resistance // Aktifkan efek resistensi saat digeser
          style={{ overflow: "visible" }} // Untuk menghindari masalah overflow
        >
          {additionalButtons.map((button, index) => (
            <div
              key={`button${index + 1}`}
              className={`my-2 opacity-0 transform transition-opacity duration-300 ${
                isClicked ? "opacity-100 translate-y-0" : ""
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex justify-center items-center`}
                style={{
                  borderRadius: "50%",
                  backgroundColor: "red",
                  color: "white",
                  padding: "0.5rem",
                  cursor: "pointer",
                }}
              >
                {button}
              </div>
            </div>
          ))}
        </SwipeableViews>
      </div>
    </div>
  );
};

export default TesButton;
