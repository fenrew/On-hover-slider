import React from "react";
import CornerSliderContainer from "../Corner-slider/CornerSliderContainer";
import CornerSliderLarge from "../Corner-slider/CornerSliderLarge";
import CornerSliderSmall from "../Corner-slider/CornerSliderSmall";

const MainPage = () => {
  return (
    <div style={{ height: "100vh", width: "100vw", backgroundColor: "red" }}>
      <div id="body-container">
        <CornerSliderContainer>
          <CornerSliderLarge>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h1>Markus</h1>
              <p style={{ fontStyle: "italic" }}>
                - Born 20th July 1992, infected by Corona 7th of Mars, 2020
              </p>
            </div>
          </CornerSliderLarge>
          <CornerSliderSmall>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100%",
              }}
            >
              <div
                style={{
                  padding: "0 0 12% 7%",
                  transform: "rotate(30deg)",
                  fontWeight: "700",
                  whiteSpace: "nowrap",
                  marginTop: "12%",
                  marginRight: "12%",
                  lineHeight: "0px",
                  fontSize: "1.2vw",
                  padding: "0",
                }}
              >
                About me
              </div>
            </div>
          </CornerSliderSmall>
        </CornerSliderContainer>
      </div>
    </div>
  );
};

export default MainPage;
