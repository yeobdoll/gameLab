import React from 'react';

function BLuxBtn(props) {
    
    return(
        <img className="full btn"
            src={require('../../../img/Lux.png').default}
            onClick={() => props.setData(7)}
        />
    );
}

export default BLuxBtn;