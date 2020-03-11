import React from 'react';
import CornerSliderContainer from "../Corner-slider/CornerSliderContainer"
import CornerSliderLarge from "../Corner-slider/CornerSliderLarge"
import CornerSliderSmall from "../Corner-slider/CornerSliderSmall"

const MainPage = () => {
    return (
        <div style={{height: "100vh", width: "100vw", backgroundColor: "red"}}>
        <div id="body-container" onClick={() => console.log("CLIIIICK")}>
            <CornerSliderContainer>
                <CornerSliderLarge>
                    <div>
                        Markus
                        <p>This is stuff about</p>
                        <p>Markus</p>
                    </div>
                </CornerSliderLarge>
                <CornerSliderSmall>
                    <div>
                        Click me!
                    </div>
                </CornerSliderSmall>
            </CornerSliderContainer>
        </div>
        </div>
    );
};

export default MainPage;