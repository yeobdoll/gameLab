import React from 'react';

function RLuxBtn(props) {
    
    return(
        <img className="full btn"
            src={require('../../../img/Lux.png').default}
            onClick={() => props.setData(7)}
        />
    );
}

export default RLuxBtn;