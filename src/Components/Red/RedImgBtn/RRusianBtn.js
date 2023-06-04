import React from 'react';

function RRusianBtn(props) {
    
    return(
        <img className="full btn"
            src={require('../../../img/Rusian.png').default}
            onClick={() => props.setData(8)}
        />
    );
}

export default RRusianBtn;