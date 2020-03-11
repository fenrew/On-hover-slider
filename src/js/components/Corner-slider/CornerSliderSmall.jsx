import React from 'react';

import styles from "./cornerSliderStyles";


const CornerSliderSmall = (props) => {
    return (
        <div id="cornerSliderSmallContainer" style={styles.container}>
            <div style={styles.smallSliderContainer}>
            {props.children}
            </div>
        </div>
    );
};

export default CornerSliderSmall;