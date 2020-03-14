import React, { useState, useEffect } from "react";

import styles from "./cornerSliderStyles";

const CornerSliderSmall = props => {
  const [styling, setStyling] = useState({
    cornerSliderContainer: { width: "100%", height: "100%" },
    cornerSliderContainerRef: React.createRef()
  });

  useEffect(() => {
    const {
      offsetHeight,
      offsetWidth
    } = styling.cornerSliderContainerRef.current.parentNode;
    // console.log(window.getComputedStyle(React.findDOMNode(styling.cornerSliderContainerRef)))

    setStyling({
      ...styling,
      cornerSliderContainer: { width: offsetWidth, height: offsetHeight }
    });
  }, []);

  return (
    <div
      ref={styling.cornerSliderContainerRef}
      id="cornerSliderSmallContainer"
      style={{
        ...styling.cornerSliderContainer,
      }}
    >
      {props.children}
    </div>
  );
};

export default CornerSliderSmall;
