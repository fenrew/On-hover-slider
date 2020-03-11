import React, { useState, useEffect } from "react";
import styles from "./cornerSliderStyles";
import "./cornerSliderStylesCss.css";

const CornerSliderContainer = props => {
  const [sliderClick, setSliderClick] = useState({
    displaySmallSlider: true,
    mouseEnter: false,
    cssProperties: {
      minWidth: "10%",
      minHeight: "10%",
      clipPath: "polygon(0 0, 0% 100%, 100% 100%, 0% 0%)"
    }
  });

  const [transitionCompleted, setTransitionCompleted] = useState({
    completed: true
  });

  const handleOnSliderClick = () => {
    console.log("MOUSE ENTER");
    let cssProperties = {
      minWidth: "30%",
      minHeight: "30%",
      clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)"
    };
    if (!sliderClick.displaySmallSlider) {
      cssProperties = {
        minWidth: "10%",
        minHeight: "10%",
        clipPath: "polygon(0 0, 0% 100%, 100% 100%, 0% 0%)"
      };
    }

    setSliderClick({
      ...sliderClick,
      displaySmallSlider: !sliderClick.displaySmallSlider,
      cssProperties: cssProperties
    });
    setTransitionCompleted({
      completed: false
    });
  };

  useEffect(() => {
    document.getElementById("cornerSliderClipping").addEventListener(
      "transitionend",
      event => {
        if (event.propertyName === "clip-path") {
          setTransitionCompleted({ completed: true });
          console.log("AOIJOIJ", sliderClick.mouseEnter)
        }
      },
      false
    );
  }, []);

  return (
    <div style={styles.container}>
      <div
        id="cornerSliderClipping"
        style={sliderClick.cssProperties}
        onMouseEnter={() =>
          transitionCompleted.completed
            ? handleOnSliderClick()
            : setSliderClick({ ...sliderClick, mouseEnter: true })
        }
        onMouseLeave={() =>
          transitionCompleted.completed
            ? handleOnSliderClick()
            : setSliderClick({ ...sliderClick, mouseEnter: false })
        }
      >
        {sliderClick.displaySmallSlider
          ? props.children.filter(ele => ele.type.name === "CornerSliderSmall")
          : props.children.filter(ele => ele.type.name === "CornerSliderLarge")}
      </div>
    </div>
  );
};

export default CornerSliderContainer;
