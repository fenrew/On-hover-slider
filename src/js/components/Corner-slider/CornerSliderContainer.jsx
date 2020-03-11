import React, { useState, useEffect } from "react";
import styles from "./cornerSliderStyles";
import "./cornerSliderStylesCss.css";

const CornerSliderContainer = props => {
  const [sliderClick, setSliderClick] = useState({
    displaySmallSlider: true,
    smallSliderSize: { width: 0, height: 0, top: 0, left: 0 },
    largeSliderSize: { width: 0, height: 0, top: 0, left: 0 },
    mouseOutside: true,
    cssProperties: {
      minWidth: "10%",
      minHeight: "10%",
      clipPath: "polygon(0 0, 0% 100%, 100% 100%, 0% 0%)"
    },
    containerRef: React.createRef(),
    largeSliderRef: React.createRef()
  });

  const [transitionCompleted, setTransitionCompleted] = useState({
    completed: true
  });

  const updateMousePosition = event => {
    const { clientY, clientX } = event;

    const { width, height, top, left } = sliderClick.displaySmallSlider
      ? sliderClick.largeSliderSize
      : sliderClick.smallSliderSize;

    // Checks if the mouse is outside of the grid
    if (
      clientX < left ||
      clientX > left + width ||
      clientY < top ||
      clientY > top + height
    ) {
      setSliderClick({
        ...sliderClick,
        mouseOutside: true
      });
    } else {
      setSliderClick({
        ...sliderClick,
        mouseOutside: false
      });
    }
  };

  const handleOnSliderClick = mouseOutside => {
    if (!sliderClick.largeSliderRef.current) return;

    let cssProperties = {
      minWidth: "30%",
      minHeight: "30%",
      clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)"
    };

    const {
      offsetTop,
      offsetLeft,
      offsetWidth,
      offsetHeight
    } = sliderClick.largeSliderRef.current;

    const sliderSize = sliderClick.displaySmallSlider
      ? "largeSliderSize"
      : "smallSliderSize";

    if (!sliderClick.displaySmallSlider) {
      cssProperties = {
        minWidth: "10%",
        minHeight: "10%",
        clipPath: "polygon(0 0, 0% 100%, 100% 100%, 0% 0%)"
      };
    }

    setTransitionCompleted({
      completed: false
    });
    setSliderClick({
      ...sliderClick,
      displaySmallSlider: !sliderClick.displaySmallSlider,
      cssProperties: cssProperties,
      [sliderSize]: {
        width: offsetWidth,
        height: offsetHeight,
        top: offsetTop,
        left: offsetLeft
      },
      mouseOutside: mouseOutside ? true : false
    });
  };

  useEffect(() => {
    const {
      offsetWidth,
      offsetHeight,
      offsetTop,
      offsetLeft
    } = sliderClick.largeSliderRef.current;

    setSliderClick({
      ...sliderClick,
      smallSliderSize: {
        width: offsetWidth * 3,
        height: offsetHeight * 3,
        top: offsetTop - (offsetHeight * 3 - offsetHeight), // = offsetHeight*2
        left: offsetLeft
      },
      largeSliderSize: {
        width: offsetWidth,
        height: offsetHeight,
        top: offsetTop,
        left: offsetLeft
      }
    });

    document.getElementById("cornerSliderClipping").addEventListener(
      "transitionend",
      event => {
        if (event.propertyName === "clip-path") {
          setTransitionCompleted({ completed: true });
        }
      },
      false
    );
  }, []);

  if (
    sliderClick.mouseOutside &&
    transitionCompleted.completed &&
    !sliderClick.displaySmallSlider
  ) {
    handleOnSliderClick(true);
  } else if (
    !sliderClick.mouseOutside &&
    transitionCompleted.completed &&
    sliderClick.displaySmallSlider
  ) {
    handleOnSliderClick(true);
  }

  return (
    <div
      id="cornerSliderMainContainer"
      ref={sliderClick.containerRef}
      onMouseMove={event =>
        transitionCompleted.completed ? "" : updateMousePosition(event)
      }
      style={styles.container}
    >
      <div
        id="cornerSliderClipping"
        ref={sliderClick.largeSliderRef}
        style={sliderClick.cssProperties}
        onMouseEnter={() =>
          transitionCompleted.completed ? handleOnSliderClick() : ""
        }
        onMouseLeave={event =>
          transitionCompleted.completed ? handleOnSliderClick() : ""
        }
      >
        {transitionCompleted.completed
          ? sliderClick.displaySmallSlider
            ? props.children.filter(
                ele => ele.type.name === "CornerSliderSmall"
              )
            : props.children.filter(
                ele => ele.type.name === "CornerSliderLarge"
              )
          : ""}
      </div>
    </div>
  );
};

export default CornerSliderContainer;
