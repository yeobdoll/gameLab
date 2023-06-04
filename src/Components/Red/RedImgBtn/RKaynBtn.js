import React from 'react';

function RKaynBtn(props) {
    
    return(
        <img className="full btn"
            src={require('../../../img/Kayn.png').default}
            onClick={() => props.setData(6)}
        />
    );
}

export default RKaynBtn;