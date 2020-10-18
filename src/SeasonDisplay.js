import React from 'react';

const seasonConfig = {
    summer: {
        text: 'Lets hit the beach!',
        iconName: 'sun'
    },
    winter: {
        text: 'Burr it is cold!',
        iconName: 'snowflake'        
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'; //JavaScript ternary expression
    } else {
        return lat > 0 ? 'winter' : 'summer'; //JavaScript ternary expression
    }
};

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    console.log(season);
    const { text, iconName } = seasonConfig[season] // { text, iconName }


    return (
        <div>
            <i className={`${iconName} icon`}></i>            
            <h1>{text}</h1>
            <i className={`${iconName} icon`}></i>
        </div>
    );
};

export default SeasonDisplay;